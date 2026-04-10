import { Link } from 'react-router';
import './aboutMe.css';

const AboutMe = () => {
  return (
    <div className="contenedor-padre-1">
      <Link to={'/'} className="back-link">← Volver</Link>

      <h1 className="titulo-presentacion">Emiliano Espinoza Medina</h1>
      
      <p className="texto-descripcion">
        Estudiante de <strong>Ingeniería en Tecnologías Computacionales</strong> en el Tec de Monterrey. 
        Apasionado por el desarrollo de software en C++ y Python, con un enfoque particular en la interconexión de redes.
      </p>

      <p className="texto-descripcion">
        Mi objetivo profesional es transicionar hacia la <strong>ciberseguridad</strong>, aplicando mis habilidades analíticas 
        para construir infraestructuras seguras y eficientes.
      </p>
    </div>
  );
};

export default AboutMe;