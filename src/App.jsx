import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SingUp from './pages/SingUp';

export default function App() {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/sign-in" element={<Signin />} />
     <Route path="/sign-up" element={<SingUp />} />
     <Route path="/about" element={<About />} />
     <Route element={<PrivateRoute />}>
     <Route path="/profile" element={<Profile />} />
   
     </Route>
    </Routes>
     </BrowserRouter>
  )
}

