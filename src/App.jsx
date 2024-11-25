import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Footer from './components/Footer';
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Languages />
            <Footer />
        </main>
    );
};

export default App;
