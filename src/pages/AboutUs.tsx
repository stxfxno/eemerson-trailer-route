import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHeroImage from "@/assets/about-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40 z-10"></div>
          <img 
            src={aboutHeroImage} 
            alt="Sobre Nosotros - Eemerson SAC" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
            <div className="max-w-3xl">
              <p className="text-accent text-lg md:text-xl font-semibold mb-4 italic">About Us</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Eemerson SAC Más de <span className="text-accent">+15 Años de Experiencia</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 italic">
                Eemerson SAC: ¡Tu éxito es nuestro destino!
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">

              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
                  Bienvenido a Eemerson SAC
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3">¿Quiénes Somos?</h3>
                      <p className="text-muted-foreground">
                        Somos una empresa líder especializada en el transporte de carga terrestre, destacándonos por nuestra experiencia probada en la gestión eficiente y segura de envíos en los sectores logísticamente más desafiantes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3">¿Qué Buscamos?</h3>
                      <p className="text-muted-foreground">
                        Buscamos ser la elección preferida para aquellos que desean un socio de transporte confiable y especializado en la optimización de operaciones logísticas complejas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3">¿Qué Ofrecemos?</h3>
                      <p className="text-muted-foreground">
                        Nos enorgullece ofrecer soluciones adaptadas a las necesidades específicas de nuestros clientes, respaldadas por una flota moderna, tecnología avanzada y un equipo altamente capacitado en la superación de obstáculos logísticos.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    Quiénes Somos
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Eemerson SAC</strong> es una empresa líder en servicios logísticos con más de 15 años de experiencia en el mercado peruano. Nos especializamos en el transporte de carga pesada, mudanzas industriales y soluciones logísticas personalizadas para empresas de todos los tamaños.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    Nuestra Misión
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Proporcionar servicios de transporte y logística de clase mundial, garantizando la seguridad, puntualidad y eficiencia en cada operación. Nos comprometemos a ser el socio logístico de confianza para nuestros clientes, contribuyendo al crecimiento y éxito de sus negocios.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    Nuestra Visión
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ser reconocidos como la empresa de transporte y logística más confiable y eficiente del Perú, expandiendo nuestros servicios a nivel nacional e internacional, manteniendo siempre los más altos estándares de calidad y seguridad.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    Nuestros Valores
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">🛡️ Confiabilidad</h3>
                        <p className="text-muted-foreground">
                          Cumplimos con nuestros compromisos y garantizamos la seguridad de tu carga.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">⚡ Eficiencia</h3>
                        <p className="text-muted-foreground">
                          Optimizamos rutas y tiempos para garantizar entregas puntuales.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">🤝 Compromiso</h3>
                        <p className="text-muted-foreground">
                          Tu éxito es nuestro éxito. Trabajamos como tu socio estratégico.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">💡 Innovación</h3>
                        <p className="text-muted-foreground">
                          Implementamos tecnología de vanguardia en nuestras operaciones.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">🌱 Responsabilidad</h3>
                        <p className="text-muted-foreground">
                          Operamos con respeto al medio ambiente y la comunidad.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">👥 Equipo</h3>
                        <p className="text-muted-foreground">
                          Contamos con profesionales altamente capacitados y comprometidos.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    ¿Por Qué Elegirnos?
                  </h2>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">+15 años de experiencia</strong> en el sector logístico
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Flota moderna y equipada</strong> para todo tipo de carga
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Seguimiento GPS en tiempo real</strong> de todas nuestras unidades
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Seguro de carga completo</strong> para tu tranquilidad
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Atención personalizada 24/7</strong> para tus necesidades
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Cobertura nacional</strong> con las mejores rutas optimizadas
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
