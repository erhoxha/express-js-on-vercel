# Forex Risk Calculator - Express.js Application

A responsive web application for calculating forex lot sizes based on risk management parameters.

## 🚀 Deployment

This application is configured for **Vercel** deployment. See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

## 📋 Features

- Calculate lot sizes based on:
  - Account balance and risk percentage
  - Entry and stop loss prices
  - Currency pair pip values
  - Broker leverage
- Responsive design for mobile (6.67" screens) and desktop
- Real-time calculations
- User-friendly interface

## 🛠️ Tech Stack

- **Backend**: Express.js 5.2.1
- **Template Engine**: EJS 3.1.10
- **Environment**: Node.js
- **Deployment**: Vercel (serverless)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

## 🌐 Local Development

The application runs on `http://localhost:3000` by default.

Environment variables can be configured in a `.env` file (see `.env.example`).

## 📁 Project Structure

```
fx-calc-node/
├── app.js                  # Main Express application
├── vercel.json             # Vercel configuration
├── package.json            # Dependencies and scripts
├── controllers/            # Route controllers
├── services/               # Business logic (calculations)
├── views/                  # EJS templates
├── public/                 # Static assets
├── routes/                 # Route definitions
├── middlewares/            # Express middlewares
└── config/                 # Configuration files
```

## 🔧 Configuration

The application is pre-configured for Vercel deployment with:
- Serverless function support
- Automatic routing
- Static file serving
- Environment variable support

## 📱 Responsive Design

The application is fully responsive with optimized views for:
- Mobile devices (including 6.67" phone screens)
- Tablets (768px+)
- Desktop (1024px+)

## 📄 License

ISC

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
