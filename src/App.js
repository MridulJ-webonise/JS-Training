import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import EditTodo from './Components/EditTodo';
import Login from './Components/Login';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/edit' component={EditTodo} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
