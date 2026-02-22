import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
      server: {
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // These will be available in your frontend code
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL || 'http://localhost:5000')
      },
      resolve: {
        alias: {
          // This allows you to use '@' to refer to your root directory in imports
          '@': path.resolve(__dirname, './'),
        },
      },
    };
});