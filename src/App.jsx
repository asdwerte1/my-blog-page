import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Development from './pages/Development';
import Baking from './pages/Baking';
import NavBar from './components/NavBar';
import NavButton from './components/NavButton';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <NavBar />
            <div id='main'>
                <NavButton />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="development" element={<Development />} />
                    <Route path='baking' element={<Baking />} />
                </Routes>   
            </div>
            <Footer />
        </>
    );
}

export default App;