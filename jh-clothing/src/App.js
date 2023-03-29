import Home from "./routers/home/home.component.jsx"
import { Routes, Route } from 'react-router-dom'
// testing
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  );
} 

export default App;
