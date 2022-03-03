import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'; // adding image to img tag
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
