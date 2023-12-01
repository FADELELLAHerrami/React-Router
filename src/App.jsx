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
import HostVans from './pages/HostVans.jsx';
import HostVansDetails from './pages/HostVansDetails.jsx';




function App() {
  return (
    <nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='Vins'>
              <Route index element={<Vans />} />
              <Route path=':id' element={<VanDetails />} />
            </Route>

            <Route element={<HostLayout />} path='host'>
                <Route element={<DashBoard />} index/>
                <Route element={<Income />} path='income' />
                <Route element={<HostReview />} path='hostReview'/>
                <Route element={<HostVans />} path="me" />
                <Route element={<HostVansDetails />} path='me/:id' />
               
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </nav>
  )
}

export default App
