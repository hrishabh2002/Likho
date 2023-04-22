
import Navbar from './component/navbar'
import About from './pages/about';
import Create from './pages/create';	
import Home from './pages/home';
import Details from './component/detail';
import { BrowserRouter, Route,Routes} from 'react-router-dom';

function App() {

  return (
    <div className='max-w-3xl m-auto'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/blogs/:id' element={<Details/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
