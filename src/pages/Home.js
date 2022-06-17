import NewHeader from "../components/NewHeader";
import NewFooter from "../components/NewFooter";
import ScrollToTop from "../components/ScrollToTop";
import ImgCarousel from "../components/ImgCarousel";
//import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {

  //const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <NewHeader />
      <ImgCarousel />
      <div className="home-container">
        <div className="texto">
          <p>
            Sabios Guias Intérpretes un programa intergeneracional de promoción
            del patrimonio y la cultura a través de la sabiduría
            de las personas mayores.
          </p>
          <p>
            Guiar y saber interpretar el paisaje y su historia
            acercándolo de forma peculiar a todos los públicos,
            es una labor que los Sabios Guías Intérpretes
            desarrollan con gran orgullo y capacidad.
          </p>
        </div>
      </div>
      <NewFooter />
    </>
  )
}