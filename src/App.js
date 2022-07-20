import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Header  />
          <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch" element={<Watch />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
