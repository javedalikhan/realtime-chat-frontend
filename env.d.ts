interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_WS_URL: string;
    // Add other variables here...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }