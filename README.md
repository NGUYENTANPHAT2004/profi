# Profile Website

A modern profile website built with React, TypeScript, and Firebase.

## Features

- Responsive design with Tailwind CSS
- Firebase integration for authentication and data storage
- Modern UI components
- Contact form
- Project showcase
- Profile information display

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Create a Firebase project and update the configuration in `src/firebase/config.ts` with your Firebase credentials:
   ```typescript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── firebase/      # Firebase configuration
  ├── App.tsx        # Main App component
  └── index.tsx      # Entry point
```

## Technologies Used

- React
- TypeScript
- Firebase
- Tailwind CSS
- React Router

## License

MIT 