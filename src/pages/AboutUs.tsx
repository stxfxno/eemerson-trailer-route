import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHeroImage from "@/assets/about-hero.webp";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Shield, CheckCircle, Award, Zap, Eye } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px] bg-[#1a2332] overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/85 to-[#1a2332]/60 z-10"></div>
          <img
            src={aboutHeroImage}
            alt="Sobre Nosotros - Eemerson SAC"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75 contrast-125"
          />
          <div className="container mx-auto px-4 py-20 relative z-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#f5a623]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#f5a623]/30">
                <Award className="w-5 h-5 text-[#f5a623]" />
                <span className="text-[#f5a623] text-sm font-bold tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Más de 15 Años de Experiencia</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Soluciones Logísticas de <br/> <span className="text-[#f5a623]">Clase Mundial</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Tu éxito es nuestro destino. Transporte de carga <span className="text-[#f5a623] font-semibold">confiable, seguro y eficiente</span> en todo el Perú.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white border-b border-[#1a2332]/10 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#1a2332] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>+15</div>
                <div className="text-sm md:text-base text-[#1a2332]/70 font-medium uppercase tracking-wide">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#1a2332] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>24/7</div>
                <div className="text-sm md:text-base text-[#1a2332]/70 font-medium uppercase tracking-wide">Atención Continua</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#1a2332] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>100%</div>
                <div className="text-sm md:text-base text-[#1a2332]/70 font-medium uppercase tracking-wide">Monitoreo GPS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#1a2332] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>MTC</div>
                <div className="text-sm md:text-base text-[#1a2332]/70 font-medium uppercase tracking-wide">Permisos Certificados</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-[#1a2332] mb-4 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Por Qué <span className="text-[#f5a623]">Elegirnos</span>
                </h2>
                <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
                <p className="text-xl text-[#1a2332]/70 max-w-3xl mx-auto font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Combinamos experiencia, tecnología y un equipo especializado para garantizar el éxito de cada envío.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <Card className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 transition-all hover:shadow-2xl hover:-translate-y-1 group bg-white">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-[#1a2332] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-[#f5a623]">
                      <Users className="w-8 h-8 text-white group-hover:text-[#1a2332] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-3 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Equipo Especializado</h3>
                    <p className="text-[#1a2332]/70 text-sm leading-relaxed font-light">
                      La excelencia de nuestra flota de transportes modernos se ve potenciada por un equipo especializado que se enfrenta con éxito a los obstáculos logísticos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 transition-all hover:shadow-2xl hover:-translate-y-1 group bg-white">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-[#1a2332] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-[#f5a623]">
                      <Clock className="w-8 h-8 text-white group-hover:text-[#1a2332] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-3 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Es Fácil Contactarnos</h3>
                    <p className="text-[#1a2332]/70 text-sm leading-relaxed font-light">
                      Garantizamos atención continua, las 24 horas, los 7 días de la semana, para resolver cualquier duda o requerimiento.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 transition-all hover:shadow-2xl hover:-translate-y-1 group bg-white">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-[#1a2332] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-[#f5a623]">
                      <Shield className="w-8 h-8 text-white group-hover:text-[#1a2332] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-3 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Permisos Certificados</h3>
                    <p className="text-[#1a2332]/70 text-sm leading-relaxed font-light">
                      Contamos con los permisos para asegurar tu confianza. Estos últimos otorgados por el MTC y SUNAT.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 transition-all hover:shadow-2xl hover:-translate-y-1 group bg-white">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-[#1a2332] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-[#f5a623]">
                      <Eye className="w-8 h-8 text-white group-hover:text-[#1a2332] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-3 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Monitoreo Constante</h3>
                    <p className="text-[#1a2332]/70 text-sm leading-relaxed font-light">
                      Garantizamos una supervisión constante de todas las unidades de carga, y te enviamos notificaciones automáticas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-[#1a2332]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-stretch">
                <div className="relative flex">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#f5a623]/20 rounded-full blur-2xl"></div>
                  <Card className="border-2 border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-[#f5a623]/50 transition-all flex-1 flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f5a623]/10 to-transparent rounded-bl-full"></div>
                    <CardContent className="pt-8 pb-8 relative z-10 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#f5a623] rounded-xl flex items-center justify-center flex-shrink-0 text-[#1a2332]">
                          <Zap className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-white uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Nuestra Misión</h2>
                      </div>
                      <p className="text-lg text-white/80 leading-relaxed font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        Proporcionar servicios de transporte y logística de clase mundial, garantizando la seguridad, puntualidad y eficiencia en cada operación. Nos comprometemos a ser el socio logístico de confianza para nuestros clientes.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f5a623]/20 rounded-full blur-2xl"></div>
                  <Card className="border-2 border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-[#f5a623]/50 transition-all flex-1 flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f5a623]/10 to-transparent rounded-bl-full"></div>
                    <CardContent className="pt-8 pb-8 relative z-10 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#f5a623] rounded-xl flex items-center justify-center flex-shrink-0 text-[#1a2332]">
                          <Eye className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-white uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Nuestra Visión</h2>
                      </div>
                      <p className="text-lg text-white/80 leading-relaxed font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        Ser reconocidos como la empresa de transporte y logística más confiable y eficiente del Perú, expandiendo nuestros servicios a nivel nacional e internacional, manteniendo siempre los más altos estándares.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#1a2332]/5 px-4 py-2 rounded-full mb-6 border border-[#1a2332]/10">
                    <Users className="w-4 h-4 text-[#1a2332]" />
                    <span className="text-[#1a2332] text-sm font-bold uppercase tracking-wide">Quiénes Somos</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] mb-6 uppercase leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Líderes en Transporte de <span className="text-[#f5a623]">Carga Terrestre</span>
                  </h2>
                  <p className="text-lg text-[#1a2332]/70 leading-relaxed mb-6 font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Somos una empresa líder especializada en el transporte de carga terrestre, destacándonos por nuestra experiencia probada en la gestión eficiente y segura de envíos en los sectores logísticamente más desafiantes.
                  </p>
                  <p className="text-lg text-[#1a2332]/70 leading-relaxed font-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Nos enorgullece ofrecer soluciones adaptadas a las necesidades específicas de nuestros clientes, respaldadas por una flota moderna, tecnología avanzada y un equipo altamente capacitado.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 hover:shadow-lg transition-all group">
                    <CardContent className="pt-6 pb-6 text-center">
                      <CheckCircle className="w-12 h-12 text-[#1a2332] mx-auto mb-4 group-hover:text-[#f5a623] transition-colors" />
                      <div className="text-xl font-bold text-[#1a2332] mb-2 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Confiabilidad</div>
                      <p className="text-sm text-[#1a2332]/70">Cumplimos nuestros compromisos</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 hover:shadow-lg transition-all group">
                    <CardContent className="pt-6 pb-6 text-center">
                      <Zap className="w-12 h-12 text-[#1a2332] mx-auto mb-4 group-hover:text-[#f5a623] transition-colors" />
                      <div className="text-xl font-bold text-[#1a2332] mb-2 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Eficiencia</div>
                      <p className="text-sm text-[#1a2332]/70">Optimización continua</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 hover:shadow-lg transition-all group">
                    <CardContent className="pt-6 pb-6 text-center">
                      <Shield className="w-12 h-12 text-[#1a2332] mx-auto mb-4 group-hover:text-[#f5a623] transition-colors" />
                      <div className="text-xl font-bold text-[#1a2332] mb-2 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Seguridad</div>
                      <p className="text-sm text-[#1a2332]/70">Protección garantizada</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#1a2332]/10 hover:border-[#f5a623]/50 hover:shadow-lg transition-all group">
                    <CardContent className="pt-6 pb-6 text-center">
                      <Award className="w-12 h-12 text-[#1a2332] mx-auto mb-4 group-hover:text-[#f5a623] transition-colors" />
                      <div className="text-xl font-bold text-[#1a2332] mb-2 uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Excelencia</div>
                      <p className="text-sm text-[#1a2332]/70">Calidad superior</p>
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
