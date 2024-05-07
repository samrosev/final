import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CatDetails from './components/CatDetails';
import AdoptionForm from './components/AdoptionForm';
import VolunteerForm from './components/VolunteerForm';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cats/:id" component={CatDetails} />
          <Route path="/adopt" component={AdoptionForm} />
          <Route path="/volunteer" component={VolunteerForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;