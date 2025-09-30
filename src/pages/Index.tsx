"use client";

import { useState, useEffect } from "react";
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
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const { settings, loading } = useSettings();

  useEffect(() => {
    const sections = ["home", "sobre", "servicos", "portfolio", "depoimentos", "contato"];
    
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 120;
      
      let currentSection = "";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
          currentSection = "contato";
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const servicesData = [
    { 
      icon: Users, 
      title: "Gestão de Redes Sociais", 
      description: "Criamos conteúdo estratégico e gerenciamos suas redes para construir uma comunidade fiel e engajada.",
      benefit: "+60% de engajamento médio" 
    },
    { 
      icon: TrendingUp, 
      title: "Tráfego Pago", 
      description: "Otimizamos campanhas no Google e Meta para atrair leads qualificados e maximizar seu retorno sobre o investimento.",
      benefit: "ROI médio de 300%+" 
    },
    { 
      icon: Award, 
      title: "Branding e Design", 
      description: "Desenvolvemos uma identidade visual única que conecta sua marca ao público e se destaca no mercado.",
      benefit: "Identidade visual de impacto" 
    },
    { 
      icon: MessageCircle, 
      title: "Consultoria Estratégica", 
      description: "Analisamos seu negócio para criar um plano de marketing digital detalhado e focado em crescimento escalável.",
      benefit: "Crescimento planejado" 
    }
  ];

  const navItems = ["home", "sobre", "servicos", "portfolio", "depoimentos"];

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
      <nav className={`fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50 transition-all duration-300 ${hasScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-6 h-24 flex justify-between items-center">
          <div 
            className="text-3xl font-poppins font-bold cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-text-main">OPPER</span>
            <span className="text-primary-red">X</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)} 
                className={`capitalize font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary-red after:transition-transform after:duration-300 after:origin-center ${
                  activeSection === item 
                    ? 'text-primary-red after:scale-x-100' 
                    : 'text-text-main hover:text-primary-red after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contato")} className="bg-primary-red hover:bg-primary-red-dark rounded-lg">
              Fale Conosco
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-main">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg py-2 border-t border-gray-200 flex flex-col items-center">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)} 
                className={`capitalize w-full text-center text-base font-medium py-3 transition-colors ${
                  activeSection === item 
                    ? 'text-primary-red bg-red-50' 
                    : 'text-text-main hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
            <div className="w-full px-4 py-2">
              <Button onClick={() => scrollToSection("contato")} className="w-full bg-primary-red hover:bg-primary-red-dark rounded-lg">
                Fale Conosco
              </Button>
            </div>
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
            <h2 className="text-4xl font-poppins">Transformamos ideias em <span className="text-primary-red">resultados digitais</span> 🚀</h2>
            <p className="text-lg text-text-muted mt-4 max-w-3xl mx-auto">
              Mais de 500 projetos entregues com sucesso. Oferecemos estratégias personalizadas para impulsionar seu negócio ao próximo nível.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map(service => (
              <Card key={service.title} className="text-center flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="text-primary-red" size={32} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-text-muted mb-4">{service.description}</p>
                  <p className="font-bold text-primary-red">{service.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-poppins mb-4">Quer potencializar seu negócio com nossos serviços?</h3>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">Fale com a gente hoje mesmo e descubra como podemos impulsionar seus resultados.</p>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="px-8 py-4 rounded-xl bg-primary-red text-white font-medium shadow-lg hover:bg-primary-red-dark focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2 transition-all text-lg"
            >
              Solicitar Orçamento
            </Button>
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
      <Testimonials />

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
      <footer className="bg-text-main text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Col 1: Logo and About */}
            <div className="md:col-span-4">
              <div 
                className="text-4xl font-poppins font-bold mb-4 cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <span className="text-white">OPPER</span>
                <span className="text-primary-red">X</span>
              </div>
              <p className="text-gray-400 pr-8">
                Agência de marketing digital focada em transformar ideias em resultados reais e mensuráveis.
              </p>
            </div>

            {/* Col 2: Services */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-lg mb-4 text-white">Serviços</h4>
              <ul className="space-y-3 text-white">
                <li><button onClick={() => scrollToSection("servicos")} className="hover:text-secondary-yellow transition-colors">Gestão de Redes Sociais</button></li>
                <li><button onClick={() => scrollToSection("servicos")} className="hover:text-secondary-yellow transition-colors">Tráfego Pago</button></li>
                <li><button onClick={() => scrollToSection("servicos")} className="hover:text-secondary-yellow transition-colors">Branding e Design</button></li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-lg mb-4 text-white">Empresa</h4>
              <ul className="space-y-3 text-white">
                <li><button onClick={() => scrollToSection("sobre")} className="hover:text-secondary-yellow transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-secondary-yellow transition-colors">Portfólio</button></li>
                <li><button onClick={() => scrollToSection("contato")} className="hover:text-secondary-yellow transition-colors">Contato</button></li>
              </ul>
            </div>

            {/* Col 4: Contact & Social */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-lg mb-4 text-white">Fale Conosco</h4>
              <ul className="space-y-4 text-white mb-6">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-secondary-yellow flex-shrink-0" />
                  <a href={`tel:+${settings?.contact_phone?.replace(/\D/g, '')}`} className="hover:text-secondary-yellow transition-colors">
                    {loading ? 'Carregando...' : formatPhoneNumberForDisplay(settings?.contact_phone || '')}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-secondary-yellow flex-shrink-0" />
                  <a href="mailto:opperstoreofc@gmail.com" className="hover:text-secondary-yellow transition-colors">
                    opperstoreofc@gmail.com
                  </a>
                </li>
              </ul>
              <h4 className="font-bold text-lg mb-4 text-white">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href={settings?.instagram_url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 bg-gray-800 rounded-full hover:bg-primary-red transition-colors group">
                  <Instagram size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-700 my-12" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Opperx. Todos os direitos reservados.</p>
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;