import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el formulario
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Resetear formulario
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Encuéntranos en",
      content: "Urb. Pro 2da Et. 5to. Sec. 39 Mza. C5 Lote 11 Urb. Pro-Los Olivos"
    },
    {
      icon: Phone,
      title: "Llámanos",
      content: "(01) 691-0940 - +51 994172181"
    },
    {
      icon: Mail,
      title: "Envíanos un correo",
      content: "eemersonsac@eemersonsac.com"
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Vie: 8:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Moderno y Dinámico */}
        <section className="relative bg-[#1a2332] text-white overflow-hidden min-h-[400px] flex items-center">
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/90 to-[#1a2332]/70 z-10"></div>

          {/* Pattern de fondo opcional */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0"></div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <div className="w-24 h-1 bg-[#f5a623] mb-6"></div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                CONTÁCTANOS
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-2xl" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Estamos listos para optimizar tu logística.
                <span className="text-[#f5a623] font-semibold"> Hablemos hoy.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-[#1a2332]/10 shadow-2xl bg-white overflow-hidden">
                <CardHeader className="bg-gray-50/50 border-b border-gray-100 p-8">
                  <CardTitle className="text-3xl font-black text-[#1a2332]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    ENVÍANOS UN MENSAJE
                  </CardTitle>
                  <p className="text-[#1a2332]/60 mt-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Completa el formulario y nuestro equipo comercial te responderá a la brevedad.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1a2332] font-semibold">Nombre Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                          className="h-12 border-gray-200 focus:border-[#f5a623] focus:ring-[#f5a623]/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1a2332] font-semibold">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                          className="h-12 border-gray-200 focus:border-[#f5a623] focus:ring-[#f5a623]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#1a2332] font-semibold">Teléfono *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+51 999 999 999"
                          className="h-12 border-gray-200 focus:border-[#f5a623] focus:ring-[#f5a623]/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-[#1a2332] font-semibold">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa"
                          className="h-12 border-gray-200 focus:border-[#f5a623] focus:ring-[#f5a623]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#1a2332] font-semibold">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Cuéntanos sobre tus necesidades logísticas..."
                        className="min-h-[150px] border-gray-200 focus:border-[#f5a623] focus:ring-[#f5a623]/20 transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-[#f5a623] hover:bg-[#f5a623]/90 text-[#1a2332] font-bold text-lg px-8 py-6 shadow-lg hover:shadow-[#f5a623]/50 transition-all uppercase tracking-wide"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Enviar Mensaje
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-2xl bg-[#1a2332] text-white overflow-hidden relative">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5a623]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                <CardHeader className="p-8 pb-4 relative z-10">
                  <CardTitle className="text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Información de Contacto
                  </CardTitle>
                  <div className="w-12 h-1 bg-[#f5a623] mt-4"></div>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-8 relative z-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-5 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#f5a623]/10 flex items-center justify-center group-hover:bg-[#f5a623] transition-colors duration-300">
                          <info.icon className="w-6 h-6 text-[#f5a623] group-hover:text-[#1a2332] transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#f5a623]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{info.title}</h3>
                        <p className="text-white/80 font-light leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>{info.content}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-[#f5a623] bg-white shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#f5a623] to-[#f5a623]/80 p-1">
                  <CardContent className="bg-white p-8 text-center">
                    <h3 className="font-black text-2xl text-[#1a2332] mb-3 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      ¿Necesitas una cotización?
                    </h3>
                    <p className="text-[#1a2332]/70 mb-6 font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      Obtén una propuesta personalizada para tus necesidades de transporte en minutos.
                    </p>
                    <Button
                      className="w-full bg-[#1a2332] hover:bg-[#1a2332]/90 text-white font-bold py-6 shadow-lg transition-all uppercase tracking-wide"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] mb-4 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  NUESTRA UBICACIÓN
                </h2>
                <div className="w-24 h-1 bg-[#f5a623] mx-auto"></div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="bg-[#1a2332]/5 rounded-lg h-[400px] flex items-center justify-center border-2 border-dashed border-[#1a2332]/10">
                  <div className="text-center text-[#1a2332]/40">
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Mapa Interactivo</p>
                    <p className="text-sm mt-2 font-light">Próximamente disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
