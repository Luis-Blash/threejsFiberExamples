import "./App.css";
import Navigations from "./components/Navigations";
import RouterGeneral from "./router/RouterGeneral";

function App() {
  return (
    <>
      <RouterGeneral>
        <Navigations />
      </RouterGeneral>
    </>
  );
}

export default App;
