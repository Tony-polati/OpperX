"use client";

import { useState, useEffect, useRef } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronRight, CheckCircle, TrendingUp, Users, Award, MessageCircle, Phone, Instagram, Mail, ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const { settings, loading } = useSettings();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    alert("Obrigado! Entraremos em contato em até 24h.");
    setFormData({ name: "", email: "", whatsapp: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Carrossel Jobs
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const jobs = [
    {
      id: 1,
      title: "Campanha Social – Cliente X",
      description: "Aumento de engajamento em 40%",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-red-400 to-red-600"
    },
    {
      id: 2,
      title: "Tráfego Pago – Cliente Y",
      description: "ROI de 320% em 3 meses",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Branding – Cliente Z",
      description: "Reconhecimento de marca +75%",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "Tráfego Pago – Cliente W",
      description: "Crescimento de 200% em 6 meses",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 5,
      title: "E-commerce – Cliente V",
      description: "Vendas aumentadas em 85%",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      id: 6,
      title: "Redes Sociais – Cliente U",
      description: "Engajamento +120% mensal",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-pink-400 to-pink-600"
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3500);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 3500);
  };

  // Format phone number for display
  const formatPhoneNumber = (phone: string) => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 13) { // +55 + 2 DDD + 9 digits
      return `+55 ${cleaned.substring(2, 4)} ${cleaned.substring(4, 8)}-${cleaned.substring(8, 12)}`;
    }
    return phone;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600">OPPERX</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-red-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection("sobre")} className="text-gray-700 hover:text-red-600 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection("servicos")} className="text-gray-700 hover:text-red-600 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection("jobs")} className="text-gray-700 hover:text-red-600 transition-colors">Nossos Jobs</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-gray-700 hover:text-red-600 transition-colors">Portfólio</button>
              <button onClick={() => scrollToSection("depoimentos")} className="text-gray-700 hover:text-red-600 transition-colors">Depoimentos</button>
              <button onClick={() => scrollToSection("contato")} className="text-gray-700 hover:text-red-600 transition-colors">Contato</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600"
              >
                {isMenuOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-red-600 transition-colors py-2">Home</button>
                <button onClick={() => scrollToSection("sobre")} className="text-gray-700 hover:text-red-600 transition-colors py-2">Sobre</button>
                <button onClick={() => scrollToSection("servicos")} className="text-gray-700 hover:text-red-600 transition-colors py-2">Serviços</button>
                <button onClick={() => scrollToSection("jobs")} className="text-gray-700 hover:text-red-600 transition-colors py-2">Nossos Jobs</button>
                <button onClick={() => scrollToSection("portfolio")} className="text-gray-700 hover:text-red-600 transition-colors py-2">Portfólio</button>
                <button onClick={() => scrollToSection("depoimentos")} className="text-gray-700 hover:text-red-600 transition-colors py-2">Depoimentos</button>
                <button onClick={() => scrollToSection("contato")} className="text-gray-700 hover:text-red-600 transition-colors py-2">Contato</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Transformamos sua marca em uma <span className="text-red-600">experiência inesquecível</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Estratégias de marketing digital que geram resultados reais para o seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection("contato")}
            >
              Peça um orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection("servicos")}
            >
              Conheça nossos serviços
            </Button>
          </div>
          
          {/* Diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados Comprovados</h3>
              <p className="text-gray-600">+40% de aumento em conversões para nossos clientes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Especialistas Certificados</h3>
              <p className="text-gray-600">Equipe com mais de 10 anos de experiência no mercado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalização Total</h3>
              <p className="text-gray-600">Estratégias sob medida para cada tipo de negócio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre a Opperx</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma agência de marketing digital dedicada a transformar marcas em experiências memoráveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Nossa História</h3>
              <p className="text-gray-600 mb-6">
                Fundada em 2014, a Opperx nasceu da visão de criar estratégias de marketing que realmente geram resultados. 
                Ao longo dos anos, evoluímos para nos tornarmos referência no mercado digital, ajudando centenas de empresas 
                a alcançarem seus objetivos de crescimento.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-red-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Missão</h4>
                    <p className="text-gray-600">Transformar negócios através de estratégias digitais inovadoras e resultados mensuráveis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-red-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Visão</h4>
                    <p className="text-gray-600">Ser a agência de referência em marketing digital para empresas que buscam crescimento sustentável</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-red-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Valores</h4>
                    <p className="text-gray-600">Integridade, Inovação, Resultados e Parceria</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Nossa Credibilidade</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                  <div className="text-gray-600">Satisfação dos Clientes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-gray-600">Prêmios e Reconhecimentos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estratégias personalizadas para impulsionar seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gestão de Redes Sociais */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-red-600" size={24} />
                </div>
                <CardTitle>Gestão de Redes Sociais</CardTitle>
                <CardDescription>
                  Construa autoridade e engajamento genuíno
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    +60% de engajamento médio
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Conteúdo estratégico e relevante
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Gestão de comunidade ativa
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Análise de métricas detalhadas
                  </li>
                </ul>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => scrollToSection("contato")}
                >
                  Solicitar Serviço
                </Button>
              </CardContent>
            </Card>

            {/* Tráfego Pago */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-red-600" size={24} />
                </div>
                <CardTitle>Tráfego Pago</CardTitle>
                <CardDescription>
                  ROI máximo e aumento de vendas garantido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    ROI médio de 300%+
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Campanhas otimizadas
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Segmentação inteligente
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Retorno rápido do investimento
                  </li>
                </ul>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => scrollToSection("contato")}
                >
                  Solicitar Serviço
                </Button>
              </CardContent>
            </Card>

            {/* Branding e Design */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-red-600" size={24} />
                </div>
                <CardTitle>Branding e Design</CardTitle>
                <CardDescription>
                  Diferenciação e reconhecimento da marca
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Identidade visual única
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Design responsivo e moderno
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Experiência do usuário premium
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Branding consistente
                  </li>
                </ul>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => scrollToSection("contato")}
                >
                  Solicitar Serviço
                </Button>
              </CardContent>
            </Card>

            {/* Consultoria Estratégica */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="text-red-600" size={24} />
                </div>
                <CardTitle>Consultoria Estratégica</CardTitle>
                <CardDescription>
                  Crescimento acelerado e sustentável
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Análise completa do negócio
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Planejamento estratégico detalhado
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Otimização de processos
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-red-600 mr-2" size={16} />
                    Crescimento escalável
                  </li>
                </ul>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => scrollToSection("contato")}
                >
                  Solicitar Serviço
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossos Jobs - Carrossel */}
      <section id="jobs" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Jobs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projetos que transformaram negócios e geraram resultados extraordinários
            </p>
          </div>
          
          {/* Clientes Destacados */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Clientes que confiam na Opperx</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">Cliente A</span>
              </div>
              <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">Cliente B</span>
              </div>
              <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">Cliente C</span>
              </div>
              <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">Cliente D</span>
              </div>
              <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-medium">Cliente E</span>
              </div>
            </div>
          </div>
          
          {/* Carrossel de Jobs */}
          <div className="relative max-w-6xl mx-auto">
            <div 
              className="overflow-hidden rounded-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {jobs.map((job) => (
                  <div key={job.id} className="w-full flex-shrink-0">
                    <Card className="h-full">
                      <CardHeader className="p-0">
                        <div className="relative h-64 overflow-hidden rounded-t-lg">
                          <img 
                            src={job.image} 
                            alt={job.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                              <div className={`w-8 h-8 bg-gradient-to-br ${job.gradient} rounded-full flex items-center justify-center`}>
                                <span className="text-white text-xs font-bold">{job.id}</span>
                              </div>
                            </div>
                            <h4 className="text-xl font-bold">{job.title.split(' – ')[0]}</h4>
                            <p className="text-sm opacity-90">{job.title.split(' – ')[1]}</p>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-green-500 text-white">
                              {job.description}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                        <p className="text-gray-600 mb-4">
                          Estratégia completa implementada para gerar resultados extraordinários e crescimento sustentável.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-semibold">{job.description}</span>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-red-600 text-red-600 hover:bg-red-50"
                          >
                            Ver detalhes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Setas de Navegação */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Próximo slide"
            >
              <ChevronRightIcon size={24} />
            </button>

            {/* Indicadores (Bullets) */}
            <div className="flex justify-center mt-6 space-x-2">
              {jobs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-red-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Botão Ver Mais Jobs */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold flex items-center mx-auto"
              onClick={() => scrollToSection("portfolio")}
            >
              Ver mais jobs
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosso Portfólio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reais que falam por si
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-red-400 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">E-commerce Fashion</span>
                </div>
                <CardTitle>Crescimento de Vendas Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implementação de estratégia de tráfego pago e otimização de conversão para loja de moda online.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Aumento de Vendas:</span>
                    <Badge className="bg-green-100 text-green-800">+85%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ROI Campanhas:</span>
                    <Badge className="bg-green-100 text-green-800">450%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Custo por Aquisição:</span>
                    <Badge className="bg-blue-100 text-blue-800">-40%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Tech Startup</span>
                </div>
                <CardTitle>Brand Awareness e Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Campanha completa de branding e geração de leads para startup de tecnologia.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Engajamento Redes:</span>
                    <Badge className="bg-green-100 text-green-800">+120%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Leads Qualificados:</span>
                    <Badge className="bg-green-100 text-green-800">+300%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Reconhecimento de Marca:</span>
                    <Badge className="bg-green-100 text-green-800">+75%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Restaurante</span>
                </div>
                <CardTitle>Presença Digital e Reservas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Estratégia completa de marketing digital para restaurante premium.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Reservas Online:</span>
                    <Badge className="bg-green-100 text-green-800">+65%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tráfego Site:</span>
                    <Badge className="bg-green-100 text-green-800">+200%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Repetição de Clientes:</span>
                    <Badge className="bg-green-100 text-green-800">+45%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias de sucesso que inspiram
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "A Opperx transformou completamente nossa presença digital. As estratégias implementadas resultaram em um aumento de 85% nas vendas online. Equipe extremamente competente e resultados acima das expectativas!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Ana Silva</h4>
                    <p className="text-sm text-gray-600">CEO - E-commerce Fashion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Consultoria estratégica da Opperx foi fundamental para o crescimento da nossa startup. O planejamento detalhado e as ações implementadas nos ajudaram a triplicar o número de leads qualificados em apenas 6 meses."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Carlos Mendes</h4>
                    <p className="text-sm text-gray-600">Fundador - Tech Startup</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "O trabalho de branding e design da Opperx elevou nosso restaurante a outro patamar. A identidade visual criada reflete perfeitamente nossa qualidade e o resultado foi um aumento significativo nas reservas e na fidelização de clientes."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Maria Oliveira</h4>
                    <p className="text-sm text-gray-600">Proprietária - Restaurante Premium</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vamos Transformar seu Negócio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Entre em contato e receba uma proposta exclusiva em até 24h
            </p>
            <div className="bg-red-100 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-red-800 font-semibold">
                🎯 Oferta Especial: Retornamos em até 24h com uma proposta exclusiva para seu negócio!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <Card>
              <CardHeader>
                <CardTitle>Solicite um Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário e nossa equipe entrará em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={4}
                      placeholder="Conte-nos sobre seus objetivos e necessidades..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="text-red-600 mr-3" size={20} />
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-gray-600">
                        {loading ? 'Carregando...' : (
                          <a 
                            href={`tel:${settings?.contact_phone}`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {formatPhoneNumber(settings?.contact_phone || '+5513981038883')}
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-red-600 mr-3" size={20} />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-gray-600">contato@opperx.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="text-red-600 mr-3" size={20} />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-gray-600">
                        {loading ? 'Carregando...' : (
                          <a 
                            href={settings?.instagram_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {settings?.instagram || '@opper.ofc'}
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Botões Rápidos */}
              <Card>
                <CardHeader>
                  <CardTitle>Atendimento Rápido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open(`https://wa.me/${settings?.contact_phone?.replace(/\D/g, '')}`, '_blank')}
                  >
                    <Phone className="mr-2" size={20} />
                    WhatsApp Direto
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    onClick={() => window.open(settings?.instagram_url || 'https://instagram.com/opper.ofc', '_blank')}
                  >
                    <Instagram className="mr-2" size={20} />
                    Instagram
                  </Button>
                </CardContent>
              </Card>

              {/* Horário de Atendimento */}
              <Card>
                <CardHeader>
                  <CardTitle>Horário de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="font-semibold">9h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-semibold">9h às 12h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="font-semibold">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">OPPERX</h3>
              <p className="text-gray-400">
                Agência de marketing digital focada em resultados e crescimento sustentável para seu negócio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection("servicos")} className="hover:text-white transition-colors">Gestão de Redes Sociais</button></li>
                <li><button onClick={() => scrollToSection("servicos")} className="hover:text-white transition-colors">Tráfego Pago</button></li>
                <li><button onClick={() => scrollToSection("servicos")} className="hover:text-white transition-colors">Branding e Design</button></li>
                <li><button onClick={() => scrollToSection("servicos")} className="hover:text-white transition-colors">Consultoria Estratégica</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection("sobre")} className="hover:text-white transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection("jobs")} className="hover:text-white transition-colors">Nossos Jobs</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-white transition-colors">Portfólio</button></li>
                <li><button onClick={() => scrollToSection("depoimentos")} className="hover:text-white transition-colors">Depoimentos</button></li>
                <li><button onClick={() => scrollToSection("contato")} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  {loading ? 'Carregando...' : (
                    <a 
                      href={`tel:${settings?.contact_phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {formatPhoneNumber(settings?.contact_phone || '+5513981038883')}
                    </a>
                  )}
                </li>
                <li>contato@opperx.com.br</li>
                <li>
                  {loading ? 'Carregando...' : (
                    <a 
                      href={settings?.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {settings?.instagram || '@opper.ofc'}
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-gray-700 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Opperx. Todos os direitos reservados.
            </p>
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;