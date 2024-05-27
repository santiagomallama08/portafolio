import React from 'react';

const Header = () => {
    return (
        <header className='fixed xl:block w-full py-4 lg:px-0 px-5 z-[999] duration-300x'>
            <nav className='flex justify-between items-center max-w-6xl mx-auto px-2'>
                <div className='flex gap-4 items-center'>
                            
                </div>
                <ul className='gap-10 md:flex hidden hover:*:text-primary *:duration-200 ml-auto'>
                    <li>
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <a href='#acercademi' >Acerca de mi</a>
                    </li>
                    <li>
                        <a href='#proyectos'>Mis Proyectos </a>
                    </li>
                    <li>
                        <a href='#habilidades'>Mis habilidades</a>
                    </li>
                   
                    <li className='theme-switch'>
                        <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
                    </li>
                </ul>
                <div className='flex items-center gap-6'>
                <span className='theme-switch md:hidden'>
                        <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
                    </span>
                    <span id='menubar' className='cursor-pointer md:hidden text-xl'>
                        <i className='fa-solid fa-bars'></i>
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Header;


