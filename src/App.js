import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Achievement from './Pages/Achievement';
import Banner from './Pages/Banner';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import MySkills from './Pages/MySkills';
import Projects from './Pages/Projects';
import SocialMedia from './Pages/SocialMedia';

function App() {
  return (
    <div className='p-2 md:p-4'>
      <Navbar />
      <Banner />
      <MySkills />
      <Experience />
      <Projects />
      <Education />
      <Achievement />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default App
