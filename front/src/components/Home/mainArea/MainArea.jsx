import classes from './MainArea.module.css'
import Header from './Header/Header'
import Posts from './Post/Posts'
export default function MainArea(){
    return(
        <div className={`${classes.wholeArea} MainArea`}>
            <Header />
            <Posts />
        </div>
    )
}