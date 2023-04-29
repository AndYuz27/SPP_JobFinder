import {Link, Route, Routes} from "react-router-dom"
import './App.css';
import MainPage from "./components/MainPage"
import Vakansii from './components/Vakansii';
import Compaines from "./components/Companies";

function App() {
  return (
    <div className="App">
<header className="hdr_main">
  <div className="logo">JobFinder</div>
  <nav>
    <Link to="/vakansii">Вакансии</Link>
    <Link to="/compaines">Компании</Link>
    <a href="">Работа рядом</a>
    <a href="">Войти</a>
  </nav>
</header>
<main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vakansii" element={<Vakansii />} />
        <Route path="/compaines" element={<Compaines />} />
      </Routes>

</main>
    </div>
  );
}

export default App;
