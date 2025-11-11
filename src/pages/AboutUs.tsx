import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHeroImage from "@/assets/about-hero-operator.jpg";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[500px]">
            {/* Left Side - Content with background pattern */}
            <div className="relative bg-primary py-16 md:py-24 px-6 md:px-12 flex items-center">
              {/* Decorative world map pattern */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJkb3RzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJ3aGl0ZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')]"></div>
              
              {/* Decorative accent rectangle */}
              <div className="absolute top-1/2 right-0 w-32 h-20 bg-accent transform translate-x-16 -translate-y-1/2 -skew-x-12"></div>
              
              <div className="relative z-10 max-w-xl">
                <p className="text-accent text-lg md:text-xl font-semibold mb-4 italic">About Us</p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Eemerson SAC Más de{" "}
                  <span className="text-accent">+15 Años de Experiencia</span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 italic">
                  Eemerson SAC: ¡Tu éxito es nuestro destino!
                </p>
              </div>
            </div>

            {/* Right Side - Image without overlay */}
            <div className="relative min-h-[400px] md:min-h-full">
              <img 
                src={aboutHeroImage} 
                alt="Sobre Nosotros - Eemerson SAC" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Decorative frame border */}
              <div className="absolute bottom-8 right-8 w-64 h-64 border-4 border-white/30 -z-0"></div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">

              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-destructive text-center mb-8">
                  Bienvenido a Eemerson SAC
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Eemerson SAC</strong> es tu socio de confianza para garantizar una gestión logística y de transporte fluida y eficiente. Nuestro compromiso de sobresalir nos distingue en el dinámico mundo de la logística, brindando soluciones personalizadas y servicios al cliente personalizados.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Adaptados a tus necesidades, brindamos servicios de transporte confiables en Perú para garantizar que tus productos lleguen a su destino de manera segura y puntual. Nuestros servicios cubren Carga Completa, Carga Parcial y Transporte Local, garantizando una red empresarial integrada.
                </p>
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
