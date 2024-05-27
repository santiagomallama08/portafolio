import { t } from "i18next";
import './App.css'
import { Routes,Route } from "react-router-dom";
import Header from "./Sections/Header";
import Acerca from "./Sections/Acerca";
import Navbar from "./Sections/Navbar";
import Inicio from "./Sections/Inicio";
import Proyectos from "./Sections/Proyectos";
import Habilidades from "./Sections/Habilidades";

export default function App() {
  return (
    <div className="bg-blue-600 bg-primary min-h-screen">
      <Header />
      <Inicio />
      <Navbar />
      <Acerca /> 
      <Proyectos />
      <Habilidades />
    </div>
  );
}

