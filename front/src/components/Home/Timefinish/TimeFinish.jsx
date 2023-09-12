import classes from './TimeFinish.module.css'
export default function TimeFinish({children}){
    return(
        <>
            <div className={classes.mainDiv}>
                <p>{children}</p>
                <img className={classes.cry} src='./cry.png' />
            </div>
        </>
    )
}