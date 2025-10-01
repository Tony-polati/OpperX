"use client";

import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    const chatbotId = "cmg7kfkvi0007l8050eulhpcc";
    const scriptSrc = "https://app.livechatai.com/embed.js";

    // Evita adicionar o script várias vezes
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.dataset.id = chatbotId;

    document.head.appendChild(script);

    // Função de limpeza para remover o script quando o componente for desmontado
    return () => {
      const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default ChatbotWidget;