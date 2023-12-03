import './App.css';
import { 
        RouterProvider,
        createBrowserRouter, 
        createRoutesFromElements , 
        Route 
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/about';
import Vans, {loader as vansloader} from './pages/Vans.jsx';
import VanDetails from './pages/VanDetails.jsx';
import Layout from './components/Layout.jsx';
import DashBoard from './pages/DashBoard.jsx';
import Income from './pages/Income.jsx';
import HostReview from './pages/HostReview.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVans from './pages/HostVans.jsx';
import HostVanDetails from './pages/HostVansDetails.jsx';
import Price from './components/Price.jsx';
import Details from './components/Details.jsx';
import Photo from './components/Photo.jsx';
import NotFound from './components/NotFound.jsx';





const router = createBrowserRouter(createRoutesFromElements(
          <Route path='/' element={<Layout />} >
              <Route path="*" element={<NotFound />} />
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='Vins'>
                  <Route index element={<Vans />} loader={vansloader} />
                  <Route path=':id' element={<VanDetails />} />
              </Route>

              <Route path='host' element={<HostLayout />} >
                  <Route index element={<DashBoard />} />
                  <Route path='income' element={<Income />} />
                  <Route path='hostReview' element={<HostReview />} />
                  <Route path='me' element={<HostVans />} />
                    <Route path='me/:id' element={<HostVanDetails />} >
                        <Route index element={<Details />} />
                        <Route path='price' element={<Price />} />
                        <Route path='photo' element={<Photo />} />
                    </Route>
              </Route>
          </Route>
));
function App() {
  return (
    <nav>
      <RouterProvider router={router} />
    </nav>
  );
}

export default App;
