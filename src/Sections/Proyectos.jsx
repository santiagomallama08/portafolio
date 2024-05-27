import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Proyectos = () => {
    return (
        <section id='proyectos' className="min-h-screen flex flex-col items-center">
            <div className='flex flex-col text-xl'>
                <h1 className="text-3xl font-bold">Mis Proyectos</h1>
            </div>
            <div className='bg-red-950 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-grow mt-14'>
                <div className="flex flex-col overflow-hidden rounded-xl border-2 border-white bg-white shadow-2xl">
                    <div className="flex items-center justify-center">
                        <article className="flex flex-col p-8 w-full">
                            <h1 className="text-xl font-bold">Diseño de software</h1>
                            <p className="text-gray-400 mt-2">Proyecto para restaurante</p>
                            <p className="text-gray-400 mt-2">JAVA</p>
                        </article>
                        <img className="w-28 h-24 p-4" src="https://miro.medium.com/v2/resize:fit:2560/1*2XrX0fP0htyTCah7AglTig.jpeg" alt="article"/>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border-2 border-white bg-white shadow-2xl">
                    <div className="flex items-center justify-center">
                        <article className="flex flex-col p-8 w-full">
                            <h1 className="text-xl font-bold">Calculadora</h1>
                            <p className="text-gray-400 mt-2">Proyecto básico de calculadora</p>
                            <p className="text-gray-400 mt-2">Python</p>
                        </article>
                        <img className="w-24 h-auto p-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png" alt="article"/>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border-2 border-white bg-white shadow-2xl">
                    <div className="flex items-center justify-center">
                        <article className="flex flex-col p-8 w-full">
                            <h1 className="text-xl font-bold">Series</h1>
                            <p className="text-gray-400 mt-2">Software para plataforma de series</p>
                            <p className="text-gray-400 mt-2">Angular</p>
                        </article>
                        <img className="w-24 h-auto p-4" src="https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj" alt="article"/>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border-2 border-white bg-white shadow-2xl">
                    <div className="flex items-center justify-center">
                        <article className="flex flex-col p-8 w-full">
                            <h1 className="text-xl font-bold">Noticias</h1>
                            <p className="text-gray-400 mt-2">Proyecto de UCC</p>
                            <p className="text-gray-400 mt-2">Flutter</p>
                        </article>
                        <img className="w-24 h-auto p-4" src="https://assets-global.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg" alt="article"/>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border-2 border-white bg-white shadow-2xl">
                    <div className="flex items-center justify-center">
                        <article className="flex flex-col p-8 w-full">
                            <h1 className="text-xl font-bold">Granja</h1>
                            <p className="text-gray-400 mt-2">E-commerce de una granja</p>
                            <p className="text-gray-400 mt-2">Python-Django</p>
                        </article>
                        <img className="w-24 h-auto p-4" src="https://datascientest.com/en/wp-content/uploads/sites/9/2023/05/django1.jpg" alt="article"/>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border-2 border-white bg-white shadow-2xl">
                    <div className="flex items-center justify-center">
                        <article className="flex flex-col p-8 w-full">
                            <h1 className="text-xl font-bold">Licores-Nariño</h1>
                            <p className="text-gray-400 mt-2">Página web para licorera</p>
                            <p className="text-gray-400 mt-2">HTML-CSS</p>
                        </article>
                        <img className="w-24 h-auto p-4" src="https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="article"/>
                    </div>
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

export default Proyectos;







 