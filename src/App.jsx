import './styling/App.css';
import Nav from './Nav.jsx';
import PageBanner from './Banner.jsx';
import About from './About.jsx';
import Content from './Content.jsx';

export default function App() {
  return (
    <div className="App">
      <PageBanner />
      <Nav />
      <MainContent />
    </div>
  );
}

function MainContent() {
  // Function to create the container for the main content of the page/topic
  return (
    <div id='contentSection' className='row'>
      <About />
      <Content />
    </div>
  )
}