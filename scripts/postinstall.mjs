// Postinstall: prepara o banco SQLite local logo após o `npm install`.
//
// Objetivo: ao clonar o projeto, basta rodar `npm install` e criar o `.env`
// (copiando o `.env.example`) para já ter o ambiente local pronto.
//
// Regras:
//   - Não roda em produção (NODE_ENV=production) — lá o banco é PostgreSQL.
//   - Não roda se o `backend/onbus.db` já existir (evita apagar dados).
//   - Nunca quebra a instalação: em caso de erro, apenas avisa.
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const dbFile = join(rootDir, 'backend', 'onbus.db');

if (process.env.NODE_ENV === 'production') {
  console.log('[postinstall] NODE_ENV=production — pulando setup do banco local.');
  process.exit(0);
}

if (existsSync(dbFile)) {
  console.log('[postinstall] backend/onbus.db já existe — pulando setup do banco.');
  process.exit(0);
}

console.log('[postinstall] Preparando banco SQLite local (backend/onbus.db)...');
const result = spawnSync('npx', ['tsx', 'backend/src/database/setup.ts'], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (result.status !== 0) {
  console.warn(
    '[postinstall] Não foi possível preparar o banco automaticamente. ' +
      'Rode "npm run setup" manualmente quando precisar.'
  );
}

process.exit(0);
