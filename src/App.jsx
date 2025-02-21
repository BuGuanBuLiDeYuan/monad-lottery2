import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import Rewards from './pages/Rewards';
import Roadmap from './pages/Roadmap';
import About from './pages/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="rewards" element={<Rewards />} />
                    <Route path="roadmap" element={<Roadmap />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;