import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import About from "../pages/About";


const RouterGeneral = ({children}) => {
  return (
    <Router>
      {children}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

RouterGeneral.propTypes = {
  children: PropTypes.node.isRequired, // Validates that children is a React node
};

export default RouterGeneral;
