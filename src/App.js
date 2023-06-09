import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <Navigation />
       {/* 添加 PetDetailsPage 路由 */}
       <Switch>
       <Route path='/search'>
  <SearchPage />
</Route>
       <Route path="/:type/:id" component={PetDetailsPage} />
       <Route path="/pet-details-not-found" component={PetDetailsNotFound} />
      <Route path="/:type?" component={HomePage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
