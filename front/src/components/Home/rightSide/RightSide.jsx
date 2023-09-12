import classes from './RightSide.module.css'
export default function RightSide(){
    return(
        <div className={`${classes.holeSide} rightSide`}>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p >choose content</p>
            <div className={`${classes.buttonSection}`}>
                <div className={classes.buttons}>
                <button >video</button>
                <button>music</button>
                <button>fun</button>
                </div>
                <div className={classes.morebuttons}>
                <button >sport</button>
                <button>chess</button>
                <button>math</button>
                </div>
                <div>
                <button>all</button>
                </div>
            </div>
            <div className={`${classes.vedioSection}`}>
                    <iframe src="./7kvp.gif" frameborder="0"  style={{marginTop:"50px", width:"100%" ,  height: "270px"}}></iframe>
            </div>
        </div>
    )
}