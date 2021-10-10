import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* Importaciones propias */
import {NavMenu} from './components/ui/NavMenu';
import {ScrollToTop} from './components/ui/ScrollToTop';

export const App = () => {
    return (
        <>
            <Router>
                <NavMenu/>
                {/*<ScrollToTop/>*/}
                <Switch>
                    <Route path="/about">
                        {/*<About/>*/}
                    </Route>
                    <Route path="/contact">
                        {/*<Contact/>*/}
                    </Route>
                    <Route path="/projects">
                        {/*<Projects/>*/}
                    </Route>
                    <Route path="/">
                        {/*<Home/>*/}
                    </Route>
                </Switch>
                {/*<Footer/>*/}
            </Router>
        </>
    )
}