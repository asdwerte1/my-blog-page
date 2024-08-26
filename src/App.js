import './styling/App.css';
import './Banner.js';
import Nav from './Nav.js';
import PageBanner from './Banner.js';


export default function App() {
  return (
    <div className="App">
      <PageBanner />
      <Nav />
    </div>
  );
}