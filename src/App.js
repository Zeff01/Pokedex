
import './App.css';
import Homepage from './Screens/Homepage'
import Pokemon from './Screens/Pokemon'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";




function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}>
        </Route>
        <Route path={`/pokemon/:id`} element={<Pokemon />}>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
