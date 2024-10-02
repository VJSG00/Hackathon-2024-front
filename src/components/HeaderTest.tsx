import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo2 from '../assets/logo2.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo2}
                alt="Logo2"
                className="h-8 w-auto sm:h-10"
                style={{ width: "160px", height: "100%" }}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Quiénes somos
            </NavLink>
            <NavLink
              to="/mision"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Misión y Visión
            </NavLink>
            <NavLink
              to="/preguntas"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Preguntas frecuentes
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contacto
            </NavLink>
            <Link to="/auth/login">
              <button className="py-2 px-4 rounded-sm text-sm bg-[#005d90] hover:bg-[#35a1da] transition duration-150">
                Iniciar Sesión
              </button>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Quiénes somos
          </NavLink>
          <NavLink
            to="/mision"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Misión y Visión
          </NavLink>
          <NavLink
            to="/preguntas"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Preguntas frecuentes
          </NavLink>
          <NavLink
            to="/contacto"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacto
          </NavLink>
          <Link to="/auth/login">
            <button className="py-2 px-4 rounded-sm text-sm bg-[#005d90] hover:bg-[#35a1da] transition duration-150">
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
