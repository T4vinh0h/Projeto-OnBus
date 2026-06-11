import { Router, Response } from 'express';
import { UsuarioService } from '../services/UsuarioService';
import { CartaoService } from '../services/CartaoService';
import { ValidadorService } from '../services/ValidadorService';
import { HorarioService } from '../services/HorarioService';
import { WebhookService } from '../services/WebhookService';
import { authMiddleware, AuthRequest } from '../middleware/authMiddleware';
import { db } from '../database/connection';

const router = Router();

// ----------------------------------------------------
// ROTAS PÚBLICAS - AUTENTICAÇÃO
// ----------------------------------------------------

// Registrar Usuário
router.post('/api/auth/register', async (req, res): Promise<any> => {
  try {
    const user = await UsuarioService.register(req.body);
    return res.status(201).json(user);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Login Usuário
router.post('/api/auth/login', async (req, res): Promise<any> => {
  try {
    const data = await UsuarioService.login(req.body);
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// ----------------------------------------------------
// ROTAS PRIVADAS - PERFIL (REQUER JWT)
// ----------------------------------------------------

// Obter Perfil
router.get('/api/profile', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const user = await UsuarioService.getProfile(req.user!.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Atualizar Perfil
router.put('/api/profile', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const user = await UsuarioService.updateProfile(req.user!.id, req.body);
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Excluir Conta (LGPD Hard Delete)
router.delete('/api/profile/lgpd', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    await UsuarioService.deleteAccountLGPD(req.user!.id);
    return res.status(200).json({ message: 'Conta e todos os dados associados excluídos permanentemente.' });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// ----------------------------------------------------
// ROTAS PRIVADAS - CARTÕES & FINANCEIRO (REQUER JWT)
// ----------------------------------------------------

// Solicitar Novo Cartão
router.post('/api/cartoes', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const { tipo, customThemeUrl } = req.body;
    const cartao = await CartaoService.emitir(req.user!.id, tipo, customThemeUrl);
    return res.status(201).json(cartao);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Listar Cartões do Usuário
router.get('/api/cartoes', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const cartoes = await CartaoService.listar(req.user!.id);
    return res.status(200).json(cartoes);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Bloquear Cartão
router.post('/api/cartoes/:id/bloquear', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const cartao = await CartaoService.bloquear(req.params.id as string, req.user!.id);
    return res.status(200).json(cartao);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Solicitar Segunda Via
router.post('/api/cartoes/:id/segunda-via', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const novoCartao = await CartaoService.solicitarSegundaVia(req.params.id as string, req.user!.id);
    return res.status(201).json(novoCartao);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Recarregar Cartão (Simulação de Pix)
router.post('/api/cartoes/:id/recarregar', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const { valor } = req.body;
    const data = await CartaoService.recarregar(req.params.id as string, Number(valor));
    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Webhook do Gateway de Pagamento (Simulado)
router.post('/api/webhooks/pagamentos', async (req, res): Promise<any> => {
  try {
    const signature = req.headers['x-webhook-signature'] as string;
    const webhookSecret = process.env.WEBHOOK_SECRET || 'webhook_secret_key';

    // Valida assinatura criptográfica
    const isValid = WebhookService.verifySignature(req.body, signature, webhookSecret);
    if (!isValid) {
      return res.status(401).json({ error: 'Assinatura do webhook inválida.' });
    }

    const { event, data } = req.body;

    if (event === 'payment.approved') {
      const { transaction_id, amount } = data;
      const transacaoConfirmada = await CartaoService.processarWebhookPagamento(transaction_id, Number(amount));
      return res.status(200).json({ status: 'success', message: 'Pagamento processado.', data: transacaoConfirmada });
    }

    return res.status(200).json({ status: 'ignored', message: 'Evento não suportado.' });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Listar Transações do Cartão
router.get('/api/cartoes/:id/transacoes', authMiddleware, async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    // Validar se o cartão pertence ao usuário
    const cartao = await db.cartoes.findOne({ id: req.params.id as string, usuario_id: req.user!.id });
    if (!cartao) return res.status(404).json({ error: 'Cartão não encontrado.' });

    const transacoes = await db.transacoes.find({ cartao_id: req.params.id as string });
    
    // Ordenar transações por data decrescente
    transacoes.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return res.status(200).json(transacoes);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// ----------------------------------------------------
// ROTAS DE VALIDAÇÃO DE EMBARQUE & SINCRONIZAÇÃO
// ----------------------------------------------------

// Processar Embarque Online (Validador -> API)
router.post('/api/validador/embarque', async (req, res): Promise<any> => {
  try {
    const { cartaoId, validadorId } = req.body;
    if (!cartaoId || !validadorId) {
      return res.status(400).json({ error: 'Os campos cartaoId e validadorId são obrigatórios.' });
    }
    const resultado = await ValidadorService.processarEmbarqueOnline(cartaoId, validadorId);
    return res.status(200).json(resultado);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Sincronizar Transações Offline (Validador -> API)
router.post('/api/validador/sincronizar', async (req, res): Promise<any> => {
  try {
    const { transacoes } = req.body;
    if (!Array.isArray(transacoes)) {
      return res.status(400).json({ error: 'Formato inválido. O corpo deve conter um array de transacoes.' });
    }
    const resultado = await ValidadorService.sincronizarTransacoesOffline(transacoes);
    return res.status(200).json(resultado);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// ----------------------------------------------------
// ROTAS DE ITINERÁRIOS
// ----------------------------------------------------

// Listar Horários
router.get('/api/itinerarios', async (req, res): Promise<any> => {
  try {
    const horarios = HorarioService.getHorarios();
    return res.status(200).json(horarios);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Obter Horário por Linha
router.get('/api/itinerarios/:id', async (req, res): Promise<any> => {
  try {
    const linha = HorarioService.getHorariosPorLinha(req.params.id);
    if (!linha) return res.status(404).json({ error: 'Linha não encontrada.' });
    return res.status(200).json(linha);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

export default router;
