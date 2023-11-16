import Footer from './components/Footer/index.style';
import Navbar from './components/NavBar/index.styled';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './pages/User';
import Professional from './pages/Professional';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/user">
                <User />
            </Route>
            <Route path="/professional">
                <Professional />
            </Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
)

export default Routes;