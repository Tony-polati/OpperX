"use client";

import { useState } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Menu, X, CheckCircle, TrendingUp, Users, Award, MessageCircle, Phone, Instagram, Mail, Clock, ShieldCheck } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";
import ImageCarousel from "@/components/ImageCarousel";
import { showSuccess } from "@/utils/toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const { settings, loading } = useSettings();

  const formatWhatsApp = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 11);
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    }
    if (cleaned.length > 7) {
      formatted = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    return formatted;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Recebemos seu contato! Nossa equipe retornará em até 24h.");
    setFormData({ name: "", email: "", whatsapp: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      setFormData(prev => ({ ...prev, [name]: formatWhatsApp(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const carouselItems = [
    {
      id: 1,
      title: "Campanha Social",
      description: "Aumento de engajamento em 40%",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      challenge: "Cliente precisava aumentar o engajamento em redes sociais para lançar novo produto.",
      solution: "Desenvolvemos estratégia de conteúdo com foco em storytelling e interação com a comunidade.",
      results: "Aumento de 40% no engajamento, 25% mais seguidores e 15% de crescimento nas vendas.",
      extraImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      category: "Social Media",
      resultsData: [
        { icon: TrendingUp, value: "+40%", label: "Engajamento" },
        { icon: Users, value: "+25%", label: "Seguidores" },
        { icon: Award, value: "+15%", label: "Vendas" }
      ]
    },
    {
      id: 2,
      title: "Tráfego Pago",
      description: "ROI de 320% em 3 meses",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      challenge: "E-commerce precisava gerar leads qualificados com baixo custo por aquisição.",
      solution: "Campanhas segmentadas no Facebook e Google com otimização contínua de anúncios.",
      results: "ROI de 320%, redução de 45% no custo por lead e aumento de 60% nas conversões.",
      extraImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      category: "Tráfego Pago",
      resultsData: [
        { icon: TrendingUp, value: "320%", label: "ROI" },
        { icon: Users, value: "-45%", label: "Custo/Lead" },
        { icon: Award, value: "+60%", label: "Conversões" }
      ]
    },
    {
      id: 3,
      title: "Branding",
      description: "Reconhecimento de marca +75%",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      challenge: "Startup precisava criar identidade visual forte para se destacar no mercado.",
      solution: "Desenvolvemos logo, paleta de cores e guia de marca completo.",
      results: "Aumento de 75% no reconhecimento de marca e 30% mais engajamento em redes.",
      extraImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      category: "Branding",
      resultsData: [
        { icon: TrendingUp, value: "+75%", label: "Reconhecimento" },
        { icon: Users, value: "+30%", label: "Engajamento" },
        { icon: Award, value: "100%", label: "Satisfação" }
      ]
    },
    {
      id: 4,
      title: "Marketing Digital",
      description: "Resultados mensuráveis",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      challenge: "Empresa tradicional precisava migrar para o digital.",
      solution: "Estratégia completa de inbound marketing com conteúdo SEO e redes sociais.",
      results: "200% mais tráfego orgânico, 150% mais leads e 80% de aumento em vendas online.",
      extraImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      category: "Marketing Digital",
      resultsData: [
        { icon: TrendingUp, value: "+200%", label: "Tráfego Orgânico" },
        { icon: Users, value: "+150%", label: "Leads" },
        { icon: Award, value: "+80%", label: "Vendas Online" }
      ]
    },
    {
      id: 5,
      title: "Design Criativo",
      description: "Identidade visual única",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      challenge: "Agência de eventos precisava de identidade visual impactante.",
      solution: "Design moderno e vibrante com foco em experiências memoráveis.",
      results: "Aumento de 90% nas reservas e reconhecimento instantâneo da marca.",
      extraImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      category: "Design",
      resultsData: [
        { icon: TrendingUp, value: "+90%", label: "Reservas" },
        { icon: Users, value: "100%", label: "Reconhecimento" },
        { icon: Award, value: "+45%", label: "Engajamento" }
      ]
    },
  ];

  const formatPhoneNumberForDisplay = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 13) {
      return `(${cleaned.substring(2, 4)}) ${cleaned.substring(4, 9)}-${cleaned.substring(9)}`;
    }
    return phone;
  };

  const whatsappUrl = `https://wa.me/${settings?.contact_phone?.replace(/\D/g, '') || '5513981038883'}?text=${encodeURIComponent("Olá, quero solicitar um orçamento.")}`;

  return (
    <div className="min-h-screen bg-background-light font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="container mx-auto px-8 py-6 h-32 flex justify-between items-center">
          <img 
            src="/logo.png" 
            alt="OpperX Logo" 
            className="h-20 md:h-32 w-auto transition-transform duration-300 hover:scale-105 cursor-pointer" 
            onClick={() => scrollToSection("home")}
          />
          <div className="hidden md:flex space-x-8 items-center">
            {["home", "sobre", "servicos", "portfolio", "depoimentos", "contato"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="capitalize text-text-main hover:text-primary-red transition-colors font-medium">
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-main">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 flex flex-col items-center space-y-4">
            {["home", "sobre", "servicos", "portfolio", "depoimentos", "contato"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="capitalize text-text-main hover:text-primary-red transition-colors font-medium py-2">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl leading-tight font-poppins">
            Transformamos marcas em <span className="text-primary-red">experiências memoráveis</span>
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-3xl mx-auto">
            Estratégias de marketing digital que geram leads qualificados e crescimento mensurável.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-primary-red text-white font-medium shadow-lg hover:bg-primary-red-dark focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2 transition-all">
              Peça um orçamento
            </a>
            <button onClick={() => scrollToSection("servicos")} className="px-8 py-4 rounded-xl border-2 border-primary-red text-primary-red font-medium hover:bg-secondary-yellow hover:text-text-main hover:border-secondary-yellow transition-all">
              Conheça nossos serviços
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 justify-center text-text-muted">
            <div className="flex items-center gap-2"><Clock size={16} /> Resposta em até 24h</div>
            <div className="flex items-center gap-2"><Users size={16} /> +500 Clientes Atendidos</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} /> 95% de Satisfação</div>
          </div>
        </div>
      </section>

      {/* Sobre / Credenciais */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-poppins mb-6">O fator "X" da OpperX</h2>
              <p className="text-text-muted mb-4">A OpperX nasceu com a missão de transformar ideias em resultados reais. Mesmo sendo uma agência jovem, carregamos a energia da inovação e a experiência de profissionais apaixonados por marketing digital.</p>
              <p className="text-text-muted mb-4">Nosso diferencial está no "X": o fator extra que entregamos em cada projeto — criatividade, estratégia e performance. Trabalhamos lado a lado com nossos clientes para construir marcas fortes, gerar impacto e criar conexões autênticas com o público.</p>
              <p className="text-text-muted">Na OpperX, cada cliente é mais que um projeto. É uma parceria. 🚀</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="text-center shadow-sm"><CardContent className="p-6"><p className="text-4xl font-bold text-primary-red mb-2">10+</p><p className="text-text-muted">Anos de Experiência</p></CardContent></Card>
              <Card className="text-center shadow-sm"><CardContent className="p-6"><p className="text-4xl font-bold text-primary-red mb-2">500+</p><p className="text-text-muted">Clientes Atendidos</p></CardContent></Card>
              <Card className="text-center shadow-sm"><CardContent className="p-6"><p className="text-4xl font-bold text-primary-red mb-2">95%</p><p className="text-text-muted">de Satisfação</p></CardContent></Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins">Nossos Serviços</h2>
            <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">Estratégias personalizadas para impulsionar seu negócio.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Gestão de Redes Sociais", bullets: ["+60% de engajamento", "Conteúdo estratégico", "Análise de métricas"] },
              { icon: TrendingUp, title: "Tráfego Pago", bullets: ["ROI médio de 300%+", "Campanhas otimizadas", "Segmentação inteligente"] },
              { icon: Award, title: "Branding e Design", bullets: ["Identidade visual única", "Design responsivo", "Experiência do usuário"] },
              { icon: MessageCircle, title: "Consultoria Estratégica", bullets: ["Análise completa", "Planejamento detalhado", "Crescimento escalável"] }
            ].map(service => (
              <Card key={service.title} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader><div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4"><service.icon className="text-primary-red" size={32} /></div><CardTitle>{service.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-text-muted mb-6">{service.bullets.map(bullet => <li key={bullet} className="flex items-center justify-center gap-2"><CheckCircle className="text-primary-red" size={16} />{bullet}</li>)}</ul>
                  <Button onClick={() => scrollToSection("contato")} className="w-full bg-primary-red hover:bg-primary-red-dark rounded-xl">Solicitar Serviço</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins">Nosso Portfólio</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore nossos trabalhos mais impactantes e resultados reais.
            </p>
          </div>
          <ImageCarousel items={carouselItems} />
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins">O Que Nossos Clientes Dizem</h2>
            <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
              Histórias de sucesso que nos inspiram a ir além.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: "Ana Silva", company: "CEO - E-commerce Fashion", quote: "A Opperx transformou nossa presença digital. O resultado foi um aumento de 85% nas vendas online. Competência e resultados acima do esperado!" },
              { name: "Carlos Mendes", company: "Fundador - Tech Startup", quote: "A consultoria foi fundamental para nosso crescimento. Triplicamos os leads qualificados em 6 meses. Recomendo fortemente!" },
              { name: "Maria Oliveira", company: "Proprietária - Restaurante", quote: "O trabalho de branding elevou nosso restaurante a outro patamar. A nova identidade visual refletiu em mais reservas e fidelização." }
            ].map(depoimento => (
              <Card key={depoimento.name} className="shadow-sm"><CardContent className="p-6"><p className="text-text-muted mb-4 italic">"{depoimento.quote}"</p><div className="flex items-center"><div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div><div><h4 className="font-bold">{depoimento.name}</h4><p className="text-sm text-text-muted">{depoimento.company}</p></div></div></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins">Vamos Transformar seu Negócio</h2>
            <div className="mt-4 inline-flex items-center gap-3 bg-secondary-yellow/10 text-text-main text-lg font-semibold px-6 py-3 rounded-full border border-secondary-yellow/30 shadow-sm">
              <Clock className="text-secondary-yellow" size={24} />
              <p>Entre em contato e receba uma proposta exclusiva em até 24h.</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-lg border-t-4 border-primary-red">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite um Orçamento</CardTitle>
                <CardDescription>Preencha o formulário e nossa equipe entrará em contato.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><Label htmlFor="name">Nome Completo</Label><Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Digite seu nome completo" /></div>
                  <div><Label htmlFor="email">E-mail</Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="seuemail@exemplo.com" /></div>
                  <div><Label htmlFor="whatsapp">WhatsApp</Label><Input id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required placeholder="(99) 99999-9999" /></div>
                  <div><Label htmlFor="message">Mensagem</Label><Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required placeholder="Ex.: Quero aumentar minhas vendas com tráfego pago." /></div>
                  <Button type="submit" className="w-full bg-primary-red hover:bg-primary-red-dark rounded-xl text-lg py-3 font-bold">Quero Receber Proposta</Button>
                </form>
                <div className="mt-6 space-y-2 text-sm text-text-muted">
                  <p className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Resposta em até 24h</p>
                  <p className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Atendimento personalizado</p>
                  <p className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Mais de 500 clientes satisfeitos</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-t-4 border-secondary-yellow flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                <CardDescription>Prefere um contato mais direto? Fale conosco!</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center space-y-6">
                <Button asChild className="w-full bg-green-500 hover:bg-green-600 rounded-xl text-lg py-3 font-bold"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><Phone className="mr-2" /> Chamar no WhatsApp</a></Button>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary-yellow rounded-full p-3"><Phone className="text-white" size={20} /></div>
                  <div>
                    <p className="font-bold">Telefone</p>
                    <a href={`tel:+${settings?.contact_phone?.replace(/\D/g, '')}`} className="text-text-muted hover:text-primary-red">{loading ? 'Carregando...' : formatPhoneNumberForDisplay(settings?.contact_phone || '')}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary-yellow rounded-full p-3"><Mail className="text-white" size={20} /></div>
                  <div>
                    <p className="font-bold">E-mail</p>
                    <a href="mailto:opperstoreofc@gmail.com" className="text-text-muted hover:text-primary-red">opperstoreofc@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary-yellow rounded-full p-3"><Instagram className="text-white" size={20} /></div>
                  <div>
                    <p className="font-bold">Instagram</p>
                    <a href={settings?.instagram_url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir Instagram ${settings?.instagram}`} className="text-text-muted hover:text-primary-red">{loading ? 'Carregando...' : settings?.instagram}</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-main text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col items-center md:items-start">
              <img src="/logo.png" alt="OpperX Logo" className="h-16 md:h-24 w-auto mb-4" />
              <p className="text-gray-400 text-center md:text-left">Agência de marketing digital focada em resultados.</p>
            </div>
            <div><h4 className="font-bold mb-4">Serviços</h4><ul className="space-y-2 text-gray-400">{["Gestão de Redes Sociais", "Tráfego Pago", "Branding e Design"].map(s => <li key={s}><button onClick={() => scrollToSection("servicos")} className="hover:text-white">{s}</button></li>)}</ul></div>
            <div><h4 className="font-bold mb-4">Empresa</h4><ul className="space-y-2 text-gray-400">{["Sobre", "Portfólio", "Contato"].map(s => <li key={s}><button onClick={() => scrollToSection(s.toLowerCase())} className="hover:text-white">{s}</button></li>)}</ul></div>
            <div><h4 className="font-bold mb-4">Contato</h4><ul className="space-y-2 text-gray-400"><li>{loading ? '...' : formatPhoneNumberForDisplay(settings?.contact_phone || '')}</li><li>opperstoreofc@gmail.com</li></ul></div>
          </div>
          <Separator className="bg-gray-700 my-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Opperx. Todos os direitos reservados.</p>
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;