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
        <div id="inicio" className="container mx-auto p-4">
          <h1 className="text-center text-4xl font-bold">Bienvenido a mi página</h1>
          <p className="text-center mt-4">
            Aquí encontrarás información sobre mis proyectos y habilidades como desarrollador.
          </p>
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