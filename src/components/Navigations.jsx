import { Link } from "react-router-dom";
import { routerPath } from "../router/pathRouter";

import "../styles/Navigations.css"

const Navigations = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routerPath.root}>Home</Link>
        </li>
        <li>
          <Link to={routerPath.about}>About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={routerPath.exampleOne3FR}>Ejemplo 1</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigations;
