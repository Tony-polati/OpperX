"use client";

import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // --------------------------------------------------------------------
    // SNIPPET DO CRISP CHAT
    // --------------------------------------------------------------------
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = "33f3d6c4-9bcc-446a-b0f6-bb2e64f2b94e";
    
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
    // --------------------------------------------------------------------

  }, []);

  return null;
};

export default ChatbotWidget;