import ReactDOM from 'react-dom';
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

const OverlayModal = (props) => {
    return (
        <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={classes.actions}>
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
        </Card>
    );
};

const BackdropModal = (props) => {
    return(
        <div onClick={props.onConfirm} className={classes.backdrop}></div>
    );
};

const ErrorModal = (props) => {
    return(
        <>
            {ReactDOM.createPortal(<OverlayModal title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay_root'))}
            {ReactDOM.createPortal(<BackdropModal onConfirm={props.onConfirm} />, document.getElementById('backdrop_root'))}
        </>   
    );
};


export default ErrorModal;