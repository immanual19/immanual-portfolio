import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import NotFound from './components/NotFound/NotFound';
import ContactMe from './components/ContactMe/ContactMe';
import MyProjects from './components/MyProjects/MyProjects';
import MyBlogs from './components/MyBlogs/MyBlogs';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path='/'>
    <Header></Header>
    <Home></Home>
    </Route>
    <Route path='/about'>
    <Header></Header>
    <AboutMe></AboutMe>
    </Route>
    <Route path='/contact'>
    <Header></Header>
    <ContactMe></ContactMe>
    </Route>
    <Route path='/projects'>
    <Header></Header>
    <MyProjects></MyProjects>
    </Route>
    <Route path='/blogs'>
    <Header></Header>
    <MyBlogs></MyBlogs>
    </Route>
    <Route path='*'>
    <NotFound></NotFound>
    </Route>
    </Switch>
    </Router>
      
    </div>
  );
}

export default App;
