import "./NewHeader.css";
import { infoRoutes } from "../components/infoRoutes";
import { useNavigate } from "react-router-dom";

export default function NewHeader() {

  const navigate = useNavigate();

  const selectStop = (stop) => {
    navigate(`/route-detail/${stop - 1}`);
  }

  const showRoute = (r, index) => {
    return (
      <li><a key={index} className="header-route-link" onClick={() => selectStop(r.id)}>{r.name}</a></li>
    );
  }

  return (
    <>
      <header className="new-header">
        <a href="/home" class="logo">
          <img src="/img/LogoSabiosGuias-Inverso.png" alt="logo"></img>
        </a>
        <nav class="navigation">
          <ul class="menu-horizontal">
            <li>
              <a href="/all-routes" class="nav-link">Ver rutas</a>
              <ul class="menu-vertical">
              {
                infoRoutes.map(showRoute)
              }
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}