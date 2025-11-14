import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-accent text-lg md:text-xl font-semibold mb-4 italic">Contact Us</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contáctanos
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Estamos aquí para ayudarte con tus necesidades logísticas
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Envíanos un Mensaje</CardTitle>
                  <p className="text-muted-foreground">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                          className="border-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                          className="border-primary/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+51 999 999 999"
                          className="border-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nombre de tu empresa"
                          className="border-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Cuéntanos sobre tus necesidades logísticas..."
                        className="min-h-[150px] border-primary/20"
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-primary/20 bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-primary-foreground/80">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl text-primary mb-3">
                    ¿Necesitas una cotización?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Obtén una cotización personalizada para tus necesidades de transporte
                  </p>
                  <Button variant="cta" className="w-full">
                    Solicitar Cotización
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Nuestra Ubicación
              </h2>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Mapa interactivo próximamente</p>
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
