import ReactDOM from 'react-dom'
import { Fragment } from 'react'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    const hide = e => {
        props.setMessageBoxShown(false);
    }
    return <div onClick={hide} className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        {props.children}
    </div>

}

const element = document.getElementById('overlays')
const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop setMessageBoxShown={props.setMessageBoxShown}/>, element)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, element)}
        
    </Fragment>
}

export default Modal