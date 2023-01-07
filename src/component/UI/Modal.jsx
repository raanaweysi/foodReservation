import { Fragment } from "react";
import  ReactDOM  from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div> ;
}
 
const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
    ) ;
}
 
const portalElement = document.getElementById('modalOverLay');

const Modal = (props) => {
  return ( <Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
  </Fragment> );
}
 
export default Modal;