"use client";

import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // --------------------------------------------------------------------
    // SNIPPET DO TINYCHAT
    // --------------------------------------------------------------------
    const script = document.createElement('script');
    script.src = "https://tinychat.ai/tinychat.js";
    script.async = true;
    script.defer = true;
    // O data-id estava vazio no snippet, então o mantive assim.
    // Se precisar adicionar um ID, pode ser feito aqui.
    script.dataset.id = ""; 

    document.head.appendChild(script);

    // Função de limpeza para remover o script quando o componente for desmontado
    return () => {
      // Tenta encontrar o script para removê-lo
      const existingScript = document.querySelector('script[src="https://tinychat.ai/tinychat.js"]');
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
    };
    // --------------------------------------------------------------------

  }, []);

  return null;
};

export default ChatbotWidget;