import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHeroImage from "@/assets/about-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Users, Clock, Shield, CheckCircle, MapPin, Phone, Award, Zap, Eye } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60 z-10"></div>
          <img
            src={aboutHeroImage}
            alt="Sobre Nosotros - Eemerson SAC"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-4 py-24 md:py-40 relative z-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-accent text-sm font-semibold">Más de 15 Años de Experiencia</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Soluciones Logísticas de <span className="text-accent">Clase Mundial</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                Tu éxito es nuestro destino. Transporte de carga confiable, seguro y eficiente en todo el Perú.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-background border-b border-border py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+15</div>
                <div className="text-sm md:text-base text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm md:text-base text-muted-foreground">Atención Continua</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm md:text-base text-muted-foreground">Monitoreo GPS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">MTC</div>
                <div className="text-sm md:text-base text-muted-foreground">Permisos Certificados</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Por Qué Elegirnos
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Combinamos experiencia, tecnología y un equipo especializado para garantizar el éxito de cada envío
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl group">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Equipo Especializado</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      La excelencia de nuestra flota de transportes modernos se ve potenciada por un equipo especializado que se enfrenta con éxito a los obstáculos logísticos, garantizando una entrega eficiente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-xl group">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Clock className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Es Fácil Contactarnos</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Garantizamos atención continua, las 24 horas, los 7 días de la semana.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl group">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Permisos Certificados</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Contamos con los permisos para asegurar tu confianza. Estos últimos otorgados por el MTC y SUNAT.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-xl group">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Eye className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Monitoreo Constante</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Garantizamos una supervisión constante de todas las unidades de carga, y te enviamos notificaciones automáticas para que estés al tanto de la ubicación y condición de tu envío.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-stretch">
                <div className="relative flex">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
                  <Card className="border-2 border-primary/20 relative overflow-hidden group hover:shadow-2xl transition-all flex-1 flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                    <CardContent className="pt-8 pb-8 relative z-10 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">Nuestra Misión</h2>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Proporcionar servicios de transporte y logística de clase mundial, garantizando la seguridad, puntualidad y eficiencia en cada operación. Nos comprometemos a ser el socio logístico de confianza para nuestros clientes, contribuyendo al crecimiento y éxito de sus negocios.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
                  <Card className="border-2 border-accent/20 relative overflow-hidden group hover:shadow-2xl transition-all flex-1 flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>
                    <CardContent className="pt-8 pb-8 relative z-10 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                          <Eye className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">Nuestra Visión</h2>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Ser reconocidos como la empresa de transporte y logística más confiable y eficiente del Perú, expandiendo nuestros servicios a nivel nacional e internacional, manteniendo siempre los más altos estándares de calidad y seguridad.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-semibold">Quiénes Somos</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Líderes en Transporte de Carga Terrestre
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Somos una empresa líder especializada en el transporte de carga terrestre, destacándonos por nuestra experiencia probada en la gestión eficiente y segura de envíos en los sectores logísticamente más desafiantes.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nos enorgullece ofrecer soluciones adaptadas a las necesidades específicas de nuestros clientes, respaldadas por una flota moderna, tecnología avanzada y un equipo altamente capacitado en la superación de obstáculos logísticos.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="border-primary/20 hover:shadow-lg transition-all">
                    <CardContent className="pt-6 pb-6 text-center">
                      <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-primary mb-2">Confiabilidad</div>
                      <p className="text-sm text-muted-foreground">Cumplimos nuestros compromisos</p>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 hover:shadow-lg transition-all">
                    <CardContent className="pt-6 pb-6 text-center">
                      <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                      <div className="text-3xl font-bold text-accent mb-2">Eficiencia</div>
                      <p className="text-sm text-muted-foreground">Optimización continua</p>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 hover:shadow-lg transition-all">
                    <CardContent className="pt-6 pb-6 text-center">
                      <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                      <div className="text-3xl font-bold text-accent mb-2">Seguridad</div>
                      <p className="text-sm text-muted-foreground">Protección garantizada</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:shadow-lg transition-all">
                    <CardContent className="pt-6 pb-6 text-center">
                      <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-primary mb-2">Excelencia</div>
                      <p className="text-sm text-muted-foreground">Calidad superior</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
