import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* Importaciones propias */
// import {ScrollToTop} from './components/ui/ScrollToTop';
import {NavMenu} from './components/ui/NavMenu';
import {Home} from './pages/Home';
import {Footer} from './components/footer/Footer';
import {About} from './pages/About';
import {Projects} from './pages/Projects';
import {Contact} from './pages/Contact';
import {SmoothScrollbar} from './components/scroll/SmoothScrollbar';

export const App = () => {
    return (
        <>
            <Router>
                <NavMenu/>
                {/*<ScrollToTop/>*/}
                <SmoothScrollbar>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/projects">
                            <Projects/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                    <Footer/>
                </SmoothScrollbar>
            </Router>
        </>
    )
}