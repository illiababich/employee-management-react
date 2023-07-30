import './index.css';
import Employees from './pages/navbar/Employees';
import Header from "./pages/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/navbar/Home";

function App() {
  return (
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path={"/employees"} element={<Employees/>}/>
            <Route path={"/"} element={<Home/>}/>
          </Routes>
        </Header>
      </BrowserRouter>
  )
}

export default App;
