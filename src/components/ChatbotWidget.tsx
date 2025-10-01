"use client";

import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // --------------------------------------------------------------------
    // SNIPPET DO CRISP CHAT
    // --------------------------------------------------------------------
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = "eca88cc6-b1c8-4efc-b6f7-98be47adb885";
    
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