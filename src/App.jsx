import { Outlet } from "react-router-dom";
import Benefits from "./components/shared/Benefits";
import Header from "./components/shared/Header";
import Hero from "./components/shared/Hero";
import Pricing from "./components/shared/Pricing";

const App = () => {
  return (
    <>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
