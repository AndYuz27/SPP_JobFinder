import {Link, Route, Routes} from "react-router-dom"
import './App.css';
import MainPage from "./components/MainPage"
import Vakansii from './components/Vakansii';

function App() {
  return (
    <div className="App">
<header className="hdr_main">
  <div className="logo">JobFinder</div>
  <nav>
    <a href="">Вакансии</a>
    <a href="">Работа рядом</a>
    <a href="">Войти</a>
  </nav>
</header>
<main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vakansii" element={<Vakansii />} />
      </Routes>

</main>
    </div>
  );
}

export default App;
