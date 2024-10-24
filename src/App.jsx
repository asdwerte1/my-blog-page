import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Development from './pages/Development';
import Baking from './pages/Baking';
import NavBar from './components/NavBar';
import NavButton from './components/NavButton';
import Footer from './components/Footer';
import Photography from './pages/Photography';
import Post from './pages/Post';

const App = () => {
    return (
        <>
            <NavBar />
            <div id='main'>
                <main>
                    <NavButton />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="development" element={<Development />} />
                        <Route path='baking' element={<Baking />} />
                        <Route path='photography' element={<Photography />}/>
                        <Route path='post' element={<Post />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;