/* Importaciones propias */
import {HeroSection} from '../components/home/hero/HeroSection';
import {AboutSection} from '../components/home/about/AboutSection';
import {ServicesSection} from '../components/home/services/ServicesSection';

export const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
        </div>
    )
}