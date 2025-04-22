import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Dashboard from './Presentation/Pages/Dashboard';
import Mocktests from './Presentation/Pages/Mocktests';
import Materials from './Presentation/Pages/Materials';
import HelpAndFeedBack from './Presentation/Pages/HelpAndFeedBack';
import AddMockTest from './Presentation/Pages/AddlMockTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/mocktests/viewmocks" element={<Mocktests/>}/>
        <Route path="/mocktests/addmocks" element={<AddMockTest/>}/>
        <Route path="/materials" element={<Materials/>}/>
        <Route path="/help" element={<HelpAndFeedBack/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
