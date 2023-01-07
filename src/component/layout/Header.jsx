import { Fragment } from "react";
import classes from './Header.module.css';
import imageHeader from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return ( 
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onclick={props.onShown}/>
      </header>
      <div className={classes['main-image']}>
        <img src={imageHeader}></img>
      </div>
    </Fragment>
   );
}
 
export default Header;