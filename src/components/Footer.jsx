import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0B1120] via-[#577494] to-[#738da7] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Flex container principal */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Información del footer */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
            <div className="flex items-center gap-3">
              <img 
                src="/src/images/LogoFelo-blanco.png" 
                alt="Logo Felo" 
                className="w-22 h-14 object-contain" 
              /> 
            </div>
            <p className="text-sm">
              Desarrollador Web especializado en crear experiencias digitales.
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/FeloOneCrew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/andres-felipe-gomez-herrera/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/FeloOneCREW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-black transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/felo_1upcrew/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-fuchsia-600 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Navegación del footer */}
          <div className="flex flex-col items-center lg:items-center text-center lg:text-right">
            <ul className="flex flex-wrap justify-center lg:justify-center space-x-4 space-y-2 lg:space-y-0">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutOf"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Acerca de mí
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-300">
            © 2024 Felipe Developer. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

