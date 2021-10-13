/* Importaciones propias */
import {HeroSection} from '../components/home/hero/HeroSection';
import {AboutSection} from '../components/home/about/AboutSection';
import {ServicesSection} from '../components/home/services/ServicesSection';
import {ProjectSection} from '../components/home/projects/ProjectSection';
// import {TestimonialsSection} from '../components/home/testimonials/TestimonialsSection';

export const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectSection/>
            {/*<TestimonialsSection/>*/}
        </div>
    )
}