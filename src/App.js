import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './Pages/Banner';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import MySkills from './Pages/MySkills';
import Projects from './Pages/Projects';
import SocialMedia from './Pages/SocialMedia';

function App() {
  return (
    <div className='m-2 md:m-4'>
      <Navbar />
      <Banner />
      <MySkills />
      <Experience />
      <Projects />
      <Education />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default App
