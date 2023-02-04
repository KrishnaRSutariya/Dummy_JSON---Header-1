import './App.css';
import { Route, Routes } from 'react-router-dom';
import Product from './Product';
import FullHomePage from './FullHomePage';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<FullHomePage/>}></Route>
        <Route path='/Product/:id' element={<Product/>}></Route>
      </Routes>

    </>
  );
}

export default App;
