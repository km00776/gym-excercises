import Header from './components/Layout/Header/Header';
import HomePage from './components/Layout/Pages/HomePage/HomePage';
import Exercises from './components/Layout/Pages/ExercisesPage/ExercisePage'
import { Route  } from "react-router-dom";
import MainDrawer from './components/Layout/Drawer/Drawer';
import './App.css'
function App () {
  return (
    <>
        <Header />
        <div className="pages">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Exercises" component = {Exercises} />
        </div>
    </>
  );
}

export default App;
