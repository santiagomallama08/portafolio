import React from "react";
import imagen2 from '../assets/imagenes/foto_perfil.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Acercademi = () => {
    return (
        <section id="acercademi" className='h-screen w-screen overflow-auto flex flex-col justify-center items-center'>
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">ACERCA DE MI</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 w-full max-w-4xl">
                <img
                    alt="developer"
                    src={imagen2}
                    className="h-72 w-64 mb-6 md:mb-0"
                />
                <div className="max-w-lg">
                    <p>
                        Soy Estudiante de quinto semestre de ingeniería de software de la universidad cooperativa de Colombia.
                        Me agrada la idea de trabajar en equipo, pienso que es una manera de conectar con nuevas habilidades y de brindar mi conocimiento al equipo con el fin de mejorar la productividad en el desarrollo de algún producto digital. Me gusta descubrir cosas nuevas a diario y ser un activo valioso en cualquier equipo en el que me desarrolle, por lo que estoy aprendiendo constantemente e investigando acerca de las nuevas tendencias.
                        Trato de buscar todo el Feedback posible en los proyectos, con el fin de mejorar y poder hacer diseños que no solo sean atractivos estéticamente sino que sean accesibles y funcionales por lo que me gusta trabajar muy de la mano con los stakeholders.
                        ¡Hablemos!
                    </p>
                </div>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
                <a href="https://github.com/santiagomallama08" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="text-black" />
                </a>
                <a href="https://www.instagram.com/byron_mallama?igsh=b3VsNWw1ZmpmcTdu" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-black" />
                </a>
                <a href="https://www.facebook.com/byronmallama15" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="text-black" />
                </a>
            </div>
        </section>
    );
};

export default Acercademi;

