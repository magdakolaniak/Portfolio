import Cards from './Flip/Cards';
import Me from './Me/Me';
import Skills from './Skills/Skills';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import MyNav from './MyNav/MyNav';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <MyNav />
        <Cards />
        <Route component={Me} path="/" />
        <Route component={Skills} path="/" />
        <Route component={Work} path="/" />
        <Route component={Contact} path="/" />
      </Router>
    </>
  );
}

export default App;
