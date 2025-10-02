"use client";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-inter text-foreground">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-red hover:text-primary-red-dark mb-8 font-medium">
            <ArrowLeft size={18} />
            Voltar para a página inicial
          </Link>
          <h1 className="text-4xl md:text-5xl font-poppins mb-6">Política de Privacidade</h1>
          <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
            <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
            
            <h2 className="text-2xl font-poppins text-foreground">1. Introdução</h2>
            <p>
              Bem-vindo à OpperX. A sua privacidade é importante para nós. Esta política de privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site.
            </p>

            <h2 className="text-2xl font-poppins text-foreground">2. Coleta de Informações</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como quando preenche um formulário de contato. As informações podem incluir:
            </p>
            <ul>
              <li>Nome</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Mensagem</li>
            </ul>
            <p>
              Também coletamos informações automaticamente quando você navega no site, como informações sobre seu dispositivo e hábitos de navegação, através de cookies e tecnologias semelhantes.
            </p>

            <h2 className="text-2xl font-poppins text-foreground">3. Uso de Cookies</h2>
            <p>
              Utilizamos cookies para melhorar a funcionalidade do nosso site e a sua experiência de navegação. Cookies são pequenos arquivos de dados armazenados no seu dispositivo que nos ajudam a:
            </p>
            <ul>
              <li>Entender como nosso site é usado.</li>
              <li>Lembrar suas preferências.</li>
              <li>Personalizar o conteúdo.</li>
              <li>Garantir a segurança do site.</li>
            </ul>
            <p>
              Ao continuar a usar nosso site, você concorda com o uso de cookies. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>

            <h2 className="text-2xl font-poppins text-foreground">4. Como Usamos Suas Informações</h2>
            <p>
              Usamos as informações coletadas para:
            </p>
            <ul>
              <li>Responder às suas solicitações e perguntas.</li>
              <li>Melhorar nosso site e serviços.</li>
              <li>Enviar comunicações de marketing, se você optar por recebê-las.</li>
              <li>Cumprir obrigações legais.</li>
            </ul>

            <h2 className="text-2xl font-poppins text-foreground">5. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail: opperstoreofc@gmail.com.
            </p>

            <h2 className="text-2xl font-poppins text-foreground">6. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta política de privacidade de tempos em tempos. Notificaremos sobre quaisquer alterações publicando a nova política nesta página.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;