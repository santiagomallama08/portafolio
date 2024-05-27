import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import perfil from '../assets/imagenes/imagen_2.jpg';
import animacion from '../assets/imagenes/3661_8e3d7.gif';

const Inicio = () => {
    return (
        <div className="min-h-screen  container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
            <section id="inicio" className="flex flex-col lg:flex-row justify-between items-center text-white space-y-6 lg:space-y-0">
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold text-center">SOFTWARE</h1>
                    <h1 className="text-4xl mt-3 text-black font-bold text-center">Engineering</h1>
                    <p className="mt-4 text-center">
                        Hola, soy <span className="bg-purple-500 text-white px-2 py-1 rounded">Santiago Mallama</span>, <br />
                        estudiante de ingeniería de software. Este es mi portafolio. ¡Espero que te guste!
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center items-center lg:-ml-8">
                    <div className="object-cover w-100 h-96">
                        <img 
                            src={perfil} 
                            className="sticky object-cover w-full h-full" 
                            alt="Mi foto" 
                            style={{ borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }} 
                        />
                    </div>
                </div>
            </section>
            <div className="flex justify-center space-x-6 mt-8">
                <a href="https://github.com/santiagomallama08" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="text-white" />
                </a>
                <a href="https://www.instagram.com/byron_mallama?igsh=b3VsNWw1ZmpmcTdu" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
                </a>
                <a href="https://www.facebook.com/byronmallama15" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white" />
                </a>
            </div>
            <img 
                src={animacion} 
                alt="spiderman animacion" 
                className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 animate-bounce" 
                style={{ marginLeft: '20px', marginTop: '20px', zIndex:"10" }} 
            />
        </div>
    );
};

export default Inicio;

















