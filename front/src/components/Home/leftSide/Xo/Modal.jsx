import classes from './Xo.module.css';
function Modal({children})
{ 
    return (
    <main className = {classes.modal}>
      <dialog open className={classes.dialog}>{children}</dialog>
    </main>
    ) ; 
}

export default Modal ; 