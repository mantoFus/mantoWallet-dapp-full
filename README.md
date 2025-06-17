# mantoWallet-dapp-full
DApp manto MT – Conexión Phantom FULL en Solana, operaciones reales (envío y balance). Interfaz dorada, diseño oficial del Reino para testeo en producción vía Firebase.

## Backend server

A simple Express server has been added under `server/`. It exposes placeholder endpoints for hybrid fiat/crypto payment integration and Google Workspace OAuth. Run it with:

```bash
cd server
npm install
node index.js
```

These endpoints return stub responses and should be replaced with real integrations.

### Environment variables

The server reads the following optional variables:

- `GOOGLE_WORKSPACE_DOMAIN` – defaults to `asluzmanto.shop`
- `GOOGLE_WORKSPACE_CONTACT` – defaults to `contacto@asluzmanto.shop`

Set them to match your Google Workspace configuration if different.

### Available endpoints

- `POST /api/pay` – hybrid fiat/crypto payment stub
- `GET /api/google-auth` – placeholder OAuth flow
- `GET /api/google-workspace` – returns configured domain and contact

## Frontend dependencies

- [DOMPurify](https://github.com/cure53/DOMPurify) via CDN sanitizes team markdown before inserting into the page.
