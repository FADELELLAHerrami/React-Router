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
import VanDetails,{loader as loaderVanDetail} from './pages/VanDetails.jsx';
import Layout from './components/Layout.jsx';
import DashBoard from './pages/DashBoard.jsx';
import Income from './pages/Income.jsx';
import HostReview from './pages/HostReview.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVans from './pages/HostVans.jsx';
import HostVanDetails,{loader as loaderVansHost} from './pages/HostVansDetails.jsx';
import Price from './components/Price.jsx';
import Details from './components/Details.jsx';
import Photo from './components/Photo.jsx';
import NotFound from './components/NotFound.jsx';
import Error from './pages/Error.jsx';
import Login,{ loader as loginLoader } from './pages/Login.jsx';
import { loader as loaderHostVans } from './pages/HostVans.jsx';
import { AuthRequired } from './components/AuthRequired.js';






const router = createBrowserRouter(createRoutesFromElements(
          <Route path='/' element={<Layout />} errorElement={<Error />} >

              <Route path="*" element={<NotFound />} />
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='login' element={<Login />} loader={ loginLoader } />
              <Route path='Vins'>
                  <Route index element={<Vans />} loader={vansloader} />
                  <Route path=':id' element={<VanDetails />} loader={loaderVanDetail} />
              </Route>

              <Route path='host' element={<HostLayout />} >
                  <Route index element={<DashBoard />} loader={async () => await AuthRequired()} />
                  <Route path='income' element={<Income />} loader={async () =>{  await AuthRequired()}} />
                  <Route path='hostReview' element={<HostReview />} loader={async () =>{  await AuthRequired()}} />
                  <Route path='me' element={<HostVans />} loader={ loaderHostVans } />
                    <Route path='me/:id' element={<HostVanDetails />} loader={loaderVansHost} >
                        <Route index element={<Details />} loader={async () =>  await AuthRequired()} />
                        <Route path='price' element={<Price />} loader={async () =>  await AuthRequired()} />
                        <Route path='photo' element={<Photo />} loader={async () =>{  await AuthRequired()}} />
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
