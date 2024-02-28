import FilterCarrier from "./pages/Home/FilterCarrier"
import FilterDate from "./pages/Home/FilterDate"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilterCarrier />} />
          <Route path="/date" element={<FilterDate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
