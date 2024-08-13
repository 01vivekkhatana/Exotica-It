import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/style.css';
import './fonts/poppins/demo';
import Dashboard from './Admin/dashboard/dashboard';
import './Admin/css/dashboard.css'
import Header_dynamic from './Admin/pages/Header_dy';
import Footer_dynamic from './Admin/pages/Footer_dy';
import Home_dynamic from './Admin/pages/Home_dy';

function App() {
  return (
        <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route exact path="/admin" element={<Dashboard/>} />
      <Route exact path="/admin/header_dynamic" element={<Header_dynamic/>} />
      <Route exact path="/admin/footer_dynamic" element={<Footer_dynamic/>} />
      <Route exact path="/admin/home_dynamic" element={<Home_dynamic/>} />
     

      </Routes>
      </Router>
  );
}

export default App;
