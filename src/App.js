import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Route,Router,Routes} from 'react-router-dom';
import { Project } from './pages/Project';
import { Article } from './pages/Article';
import { Contact } from './pages/Contact';
function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project/>}/>
        <Route path="/article" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
