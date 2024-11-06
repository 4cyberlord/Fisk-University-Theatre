# Fisk University Theatre Project

A web application for the Fisk University Theatre department showcasing performances, events, and department information.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Installation Steps

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd fisk-university-theatre
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   If you encounter any installation issues, try using the legacy-peer-deps flag:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add necessary environment variables (if any)

   ```bash
   cp .env.example .env
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## Building for Production

1. **Create a production build**

   ```bash
   npm run build
   ```

2. **Start the production server**

   ```bash
   npm start
   ```

## Deployment

To deploy to Vercel:

1. Install Vercel CLI

   ```bash
   npm install -g vercel
   ```

2. Login to Vercel

   ```bash
   vercel login
   ```

3. Deploy

   ```bash
   vercel
   ```

   If you encounter deployment issues, try deploying with the legacy-peer-deps flag:

   ```bash
   vercel --build-env NPM_FLAGS="--legacy-peer-deps"
   ```

## Project Structure
