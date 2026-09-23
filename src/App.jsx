import DatenschutzPage from "./pages/DatenschutzPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ImpressumPage from "./pages/ImpressumPage.jsx";

export default function App() {
  if (window.location.pathname === "/datenschutz") {
    return <DatenschutzPage />;
  }

  if (window.location.pathname === "/impressum") {
    return <ImpressumPage />;
  }

  return <HomePage />;
}
