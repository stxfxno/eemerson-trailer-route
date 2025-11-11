import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutUsImage from "@/assets/About-us.png";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* About Us Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
              Sobre Nosotros
            </h1>
            
            <div className="space-y-8">
              {/* Image in a smaller card format */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                <img 
                  src={aboutUsImage} 
                  alt="Sobre Nosotros - Eemerson SAC" 
                  className="w-full h-[280px] object-cover"
                  loading="eager"
                />
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
