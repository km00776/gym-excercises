import Header from './components/Layout/Header/Header';
import HomePage from './components/Layout/Pages/HomePage/HomePage';
import Exercises from './components/Layout/Pages/ExercisesPage/ExercisePage'
import { Route, Link } from "react-router-dom";

import './App.css'
function App () {
  return (
    <>
        <Header />
        <div className="pages">
          <Route exact   path="/" component={HomePage} />
          <Route exact path="/Exercises" component = {Exercises} />
        </div>
    </>
  );
}

export default App;
