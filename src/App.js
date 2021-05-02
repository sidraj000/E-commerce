
import './App.css';
import Home from './Components/Home'
import { Router,Route,Switch} from 'react-router-dom';
import history from './History'
import Fashion from './Components/Products/Fashion';
import Electronics from './Components/Products/Electronics';
import Cart from './Components/Cart';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="app">
      <Router history={history}>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Electronics" component={Electronics} />
          <Route path="/Fashion" component={Fashion} />
          <Route path="/Cart" component={Cart} />
      </Switch>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
