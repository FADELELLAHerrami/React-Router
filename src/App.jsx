import './App.css';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Vans from './pages/Vans.jsx';
import VanDetails from './pages/VanDetails.jsx';
import Layout from './components/Layout.jsx';
import DashBoard from './pages/DashBoard.jsx';
import Income from './pages/Income.jsx';
import HostReview from './pages/HostReview.jsx';
import HostLayout from './components/HostLayout.jsx';





function App() {
  return (
    <nav>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Vins' element={<Vans />} />
            <Route path='/Vins/:id' element={<VanDetails />} />

            <Route element={<HostLayout />} path='/host'>
                <Route element={<DashBoard />} path='/host' />
                <Route element={<Income />} path='/host/income' />
                <Route element={<HostReview />} path='/host/hostReview'/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </nav>
  )
}

export default App
