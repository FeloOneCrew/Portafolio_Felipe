import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow pt-20">
        <div id="inicio" className="relative h-screen flex justify-center items-center">
          {/* Video de fondo */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/videos/fondo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Contenido superpuesto */}
          <div className="relative z-10 text-center text-white p-4">
            <h1 className="text-4xl font-bold">¡Bienvenidos!</h1>
            <p className="mt-4">
              Aquí encontrarás información sobre mis proyectos y habilidades como desarrollador.
            </p>
          </div>

          {/* Filtro oscuro opcional */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        </div>

        <div id="about" className="container mx-auto p-4 mt-10">
          <h2 className="text-center text-3xl font-bold">Acerca de mí</h2>
          <p className="text-center mt-4">Soy un desarrollador apasionado por el aprendizaje y los desafíos.</p>
        </div>

        <div id="projects" className="container mx-auto p-4 mt-10">
          <h2 className="text-center text-3xl font-bold">Proyectos</h2>
          <p className="text-center mt-4">Estos son algunos de mis proyectos recientes.</p>
        </div>

        <div id="contact" className="container mx-auto p-4 mt-10">
          <h2 className="text-center text-3xl font-bold">Contactos</h2>
          <p className="text-center mt-4">Puedes contactarme a través de mis redes sociales o correo electrónico.</p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;