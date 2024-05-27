import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import flutter from '../assets/imagenes/flutter.gif';
import angular from '../assets/imagenes/angular.gif';
import diseño from '../assets/imagenes/diseñadorWeb.gif';
import java from '../assets/imagenes/java.gif';
import python from '../assets/imagenes/python.gif';
import sql from '../assets/imagenes/Sql.gif';

const Habilidades = () => {
    return (
        <section id="habilidades" className="container min-h-screen flex-center mt-40">
            <div className="text-center text-balance">
                <h1 className="text-3xl font-bold">Mis Habilidades</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="text-primary mr-4">
                        <i className="far fa-object-ungroup"></i>
                    </div>
                    <div>
                        <h6 className="font-semibold whitespace-nowrap mb-2">Diseñador Web</h6>
                        <img src={diseño} alt="diseño animacion" className="w-24 h-auto" />
                    </div>
                    <i className="fas fa-arrow-up-long text-primary rotate-45 ml-4 cursor-pointer"></i>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="text-primary mr-4">
                        <i className="fas fa-pen-nib"></i>
                    </div>
                    <div>
                        <h6 className="font-semibold whitespace-nowrap mb-2">SQL</h6>
                        <img src={sql} alt="diseño animacion" className="w-24 h-auto" />
                    </div>
                    <i className="fas fa-arrow-up-long text-primary rotate-45 ml-4 cursor-pointer"></i>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="text-primary mr-4">
                        <i className="fas fa-people-group"></i>
                    </div>
                    <div>
                        <h6 className="font-semibold whitespace-nowrap mb-2">Python</h6>
                        <img src={python} alt="diseño animacion" className="w-24 h-auto" />
                    </div>
                    <i className="fas fa-arrow-up-long text-primary rotate-45 ml-4 cursor-pointer"></i>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="text-primary mr-4">
                        <i className="fas fa-people-group"></i>
                    </div>
                    <div>
                        <h6 className="font-semibold whitespace-nowrap mb-2">Java</h6>
                        <img src={java} alt="diseño animacion" className="w-24 h-auto" />
                    </div>
                    <i className="fas fa-arrow-up-long text-primary rotate-45 ml-4 cursor-pointer"></i>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="text-primary mr-4">
                        <i className="fas fa-people-group"></i>
                    </div>
                    <div>
                        <h6 className="font-semibold whitespace-nowrap mb-2">Flutter</h6>
                        <img src={flutter} alt="diseño animacion" className="w-24 h-auto" />
                    </div>
                    <i className="fas fa-arrow-up-long text-primary rotate-45 ml-4 cursor-pointer"></i>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="text-primary mr-4">
                        <i className="fas fa-people-group"></i>
                    </div>
                    <div>
                        <h6 className="font-semibold whitespace-nowrap mb-2">Angular</h6>
                        <img src={angular} alt="diseño animacion" className="w-24 h-auto" />
                    </div>
                    <i className="fas fa-arrow-up-long text-primary rotate-45 ml-4 cursor-pointer"></i>
                </div>
            </div>
            <div className="flex justify-center space-x-6 mt-40">
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
        </section>
    );
};

export default Habilidades;


