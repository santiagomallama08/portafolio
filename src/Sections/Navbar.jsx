const Navbar = () => {
    return (
      <ul
        id='mobile-nav'
        className='gap-10 text-xl md:hidden dark:bg-slate-800 bg-primary text-white flex-center flex-col fixed w-full h-0 overflow-hidden bottom-0 duration-200 rounded-t-3xl left-0 z-[998]'
      >
        <li>
          <a href='#acercademi'>Acerca de mi</a>
        </li>
        <li>
          <a href='#proyectos'>Mis proyectos</a>
        </li>
        <li>
          <a href='#habilidades'>Mis habilidades</a>
        </li>
        <li>
          <a href='#contactos'>Contactos</a>
        </li>
        
      </ul>
    );
  };
  
  export default Navbar;