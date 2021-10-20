import CustomButton from '../../../UI/Button';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <header className="header-container">
        <h1 className="welcome-text">Welcome!</h1>
      </header>
      <body>
        <h2 className="subheading">
          lorem Ipsum is lorem Ipsum lorem Ipsum is simply dummy text.
        </h2>
        <div className="button-container">
          <CustomButton color="#FF1744" text="Find Exercises" />
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
