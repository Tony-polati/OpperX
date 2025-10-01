"use client";

import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // --------------------------------------------------------------------
    // SNIPPET DO TINYCHAT
    // --------------------------------------------------------------------
    
    // Configura o chatbot para aparecer no canto inferior direito
    (window as any).tinyChat = {
      id: "", // O data-id do snippet estava vazio
      position: "br", // 'br' para bottom-right (canto inferior direito)
    };

    const script = document.createElement('script');
    script.src = "https://tinychat.ai/tinychat.js";
    script.async = true;
    script.defer = true;
    script.dataset.id = ""; 

    document.head.appendChild(script);

    // Função de limpeza para remover o script e o widget quando o componente for desmontado
    return () => {
      const existingScript = document.querySelector('script[src="https://tinychat.ai/tinychat.js"]');
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
      // Também remove o widget da tela para evitar duplicatas em desenvolvimento
      const widget = document.querySelector('[data-tinychat-id]');
      if (widget) {
        widget.remove();
      }
    };
    // --------------------------------------------------------------------

  }, []);

  return null;
};

export default ChatbotWidget;