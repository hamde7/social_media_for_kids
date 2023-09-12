import classes from './Header.module.css'
import { BiVideo } from "react-icons/bi";
import { BiHome } from "react-icons/bi";

export default function Header(){
    return(
        <div className={`${classes.fixedHder}`}>
            <div className={classes.MainHeader}>
                <button><BiVideo style={{fontSize:"30px"}}/></button>
                <button><BiHome style={{fontSize:"30px"}}/></button>
            </div>
        </div>
    )
}