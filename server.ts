/**
 * Server entry point for LOCAL DEVELOPMENT only
 *
 * NOTE: This file is NOT used on Vercel deployment.
 * Vercel automatically handles server.listen() and uses app.ts directly.
 *
 * For local development, run: npm run dev
 */

import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
