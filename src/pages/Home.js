/* Importaciones propias */
import {HeroSection} from '../components/home/hero/HeroSection';
import {AboutSection} from '../components/home/about/AboutSection';
import {ServicesSection} from '../components/home/services/ServicesSection';
import {ProjectSection} from '../components/home/projects/ProjectSection';

export const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectSection/>
        </div>
    )
}