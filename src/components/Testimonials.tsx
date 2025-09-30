"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonialsData = [
  {
    name: "Ana Silva",
    company: "CEO - E-commerce Fashion",
    quote: "A Opperx transformou nossa presença digital. O resultado foi um aumento de +85% nas vendas online em apenas 3 meses. Competência e resultados acima do esperado!",
    avatar: "AS"
  },
  {
    name: "Carlos Mendes",
    company: "Fundador - Tech Startup",
    quote: "A consultoria foi fundamental para nosso crescimento. Triplicamos os leads qualificados, um aumento de 200% em 6 meses. Recomendo fortemente!",
    avatar: "CM"
  },
  {
    name: "Maria Oliveira",
    company: "Proprietária - Restaurante",
    quote: "O trabalho de branding elevou nosso restaurante a outro patamar. A nova identidade visual refletiu em +40% mais reservas e fidelização de clientes.",
    avatar: "MO"
  }
];

const Testimonials = () => {
  const highlightResults = (text: string) => {
    const parts = text.split(/(\+\d+%?|\d+%|\+\d+)/g);
    return parts.map((part, index) =>
      /(\+\d+%?|\d+%|\+\d+)/.test(part) ? (
        <strong key={index} className="text-primary-red font-bold">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins">
            Clientes que confiaram na OpperX e tiveram{" "}
            <span className="text-primary-red">resultados reais</span> 🚀
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-3xl mx-auto">
            Mais de 500 negócios transformados. Veja o que nossos parceiros dizem sobre nós.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-testimonials",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-16"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-secondary-yellow overflow-hidden">
                <CardContent className="p-8 flex-grow flex flex-col">
                  <Quote className="w-12 h-12 text-primary-red/20 mb-4" />
                  <p className="text-text-muted mb-6 italic flex-grow">
                    "{highlightResults(testimonial.quote)}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-14 h-14 bg-secondary-yellow text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main">{testimonial.name}</h4>
                      <p className="text-sm text-text-muted">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-testimonials flex justify-center gap-2 mt-4"></div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-poppins mb-4">Quer ser nosso próximo case de sucesso?</h3>
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
  );
};

export default Testimonials;