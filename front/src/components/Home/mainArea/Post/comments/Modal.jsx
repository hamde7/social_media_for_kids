import { useNavigate } from 'react-router-dom';
import classes from './modal.module.css'
function Modal({children }){
    const nav = useNavigate();
    function GoToApp(){
        nav('/Home');
    }
    return(
        <>
            <div className={classes.backdrop} onClick={GoToApp} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}
export default Modal;