import CustomButton from '../../../UI/Button';
import './HomePage.css';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();


  return (
    <div className="container">
      <header className="header-container">
        <h1 className="welcome-text">Welcome!</h1>
      </header>
      <body>
        <h2 className="subheading">
          In the gym? Use this website to find designated workouts for specific body parts
        </h2>
        <div className="button-container">
          <CustomButton onClick={() => history.push('/Exercises')} color="#FF1744" text="Search Exercises" />
        </div>
        <div className="image-container">
          <img
         
            alt="gymdude"
            src="https://i.imgur.com/Wzxmx3j.png"
          />
        </div>
      </body>
    </div>
  );
};

export default HomePage;
