import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* Importaciones propias */
import {NavMenu} from './components/ui/NavMenu';
import {ScrollToTop} from './components/ui/ScrollToTop';
import {Home} from './pages/Home';
import {Footer} from './components/footer/Footer';
import {About} from './pages/About';
import {Projects} from './pages/Projects';

export const App = () => {
    return (
        <>
            <Router>
                <NavMenu/>
                <ScrollToTop/>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/contact">
                        {/*<Contact/>*/}
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}