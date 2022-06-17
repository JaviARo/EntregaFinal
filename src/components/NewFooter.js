import "./NewFooter.css";
import rss from "./rss.xml";

export default function NewFooter() {

  const handleClick2 = () => {window.open(rss, '_self');}
  
  return (
    <>
      <footer className="footer">
        <div className="logos">
        <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
          <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
          <img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        </div>
        <div className="rss">
          <span onClick={handleClick2} className="pointer-RSS">RSS</span>
        </div>
        <div className="cookies">©Copyright • Política de privacidad • Política de cookies</div>
      </footer>
    </>
  );
}