import { Link } from "react-router";
import './projects.css';

const Projects = () => {
    const misProyectos = [
        {
            titulo: "Smart Cities Challenge Banorte",
            descripcion: "Colaboración en el desarrollo de una solución basada en datos para desafíos urbanos, optimizando recursos mediante la integración de sistemas de información.",
            tecnologias: ["Data Analysis", "System Architecture"],
            link: "https://github.com/cipher241/Smart_Cities_Banorte.git"
        },
        {
            titulo: "Point of Sale (POS) System",
            descripcion: "Sistema de punto de venta funcional desarrollado en Python con persistencia de datos en archivos JSON y CSV para la gestión de ventas e inventarios.",
            tecnologias: ["Python", "JSON", "CSV"],
            link: "http://github.com/duskyalpha07/Punto-de-venta" 
        },
        {
            titulo: "C++ Video Catalog Management",
            descripcion: "Aplicación de gestión que utiliza Programación Orientada a Objetos (POO), herencia y polimorfismo para administrar un catálogo de videos.",
            tecnologias: ["C++", "OOP", "File I/O"],
            link: "https://github.com/duskyalpha07/Video-Streaming-Service-Catalog-Management-System.git" 
        }
    ];

    return (
        <div className="projects-container">
            <nav className="projects-nav">
                <Link to={'/'} className="back-button">← Volver</Link>
            </nav>
            
            <h1 className="projects-title">Proyectos Destacados</h1>
            
            <div className="projects-grid">
                {misProyectos.map((proyecto, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3>{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>
                            <div className="tech-stack">
                                {proyecto.tecnologias.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <a href={proyecto.link} className="project-link">Ver Repositorio</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;