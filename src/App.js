import './App.css';
import Billing from './Pages/Billing';
import Dashboard from './Pages/Dashboard';
import Icons from './Pages/Icons';
import Landing from './Pages/Landing';
import Map from './Pages/Map';
import Notifications from './Pages/Notifications';
import Profile from './Pages/Profile';
import RTL from './Pages/RTL';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Tables from './Pages/Tables';
import Template from './Pages/Template';
import Typography from './Pages/Typography';
import VirtualReality from './Pages/VirtualReality';
import "./Assets/css/material-dashboard.css"
import "./Assets/css/material-dashboard.css.map"
import "./Assets/css/material-dashboard.min.css"
import "./Assets/css/nucleo-icons.css"
import "./Assets/css/nucleo-svg.css"
import "./Assets/scss/material-dashboard.scss"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/icons' element={<Icons/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/rtl' element={<RTL/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/tables' element={<Tables/>}/>
        <Route path='/template' element={<Template/>}/>
        <Route path='/typography' element={<Typography/>}/>
        <Route path='/virtual-reality' element={<VirtualReality/>}/>
      </Routes>
    </div>
  );
}

export default App;
