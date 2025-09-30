"use client";

import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // --------------------------------------------------------------------
    // COLE O SNIPPET DO SEU CHATBOT AQUI
    // --------------------------------------------------------------------
    // O código abaixo é um exemplo de como um snippet pode ser adicionado.
    // Substitua-o pelo snippet fornecido pelo seu serviço de chatbot (Tidio, Crisp, etc.).
    /*
    const script = document.createElement('script');
    script.src = "//SUA_URL_DO_SCRIPT_AQUI";
    script.async = true;
    document.body.appendChild(script);

    // Função de limpeza opcional para remover o script quando o componente for desmontado
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
    */
    // --------------------------------------------------------------------

  }, []);

  // Este componente não renderiza nada visualmente.
  // O widget do chatbot será injetado na página pelo script que você colar acima.
  return null;
};

export default ChatbotWidget;