import { Link } from "react-router-dom"

const Header = () => {
    const styles = {
        container : {
            display : "flex",
            gap : 30,
            padding : 20,
            backgroundColor : "#000000",
            color : "white",
            fontFamily : "Helvetica",
            fontSize : 24,
            fontWeight : "bold",
            width: "100%",            
            position: "fixed",         
            top: 0,            
            left: 0,
            right: 0,
            zIndex: 1000     
        },
        textLink : {
            color : "white",
            fontFamily : "Helvetica",
            fontSize : 16,
            textDecoration : "none"
        }
    }
    return (
        <div style = {styles.container}>
            <Link style = {styles.textLink} to = "/">Home</Link> 
            <Link style = {styles.textLink} to = "/genre/drama">Drama</Link>
            <Link style = {styles.textLink} to = "/genre/blockbuster">Blockbuster</Link>
            <Link style = {styles.textLink} to = "/genre/action&adventure">Action and Adventure</Link>
            <Link style = {styles.textLink} to = "/genre/getonaction">Get It on the Action</Link>
            <Link style = {styles.textLink} to = "/genre/horror">Horror</Link>
            <Link style = {styles.textLink} to = "/genre/suspenseful">Suspenseful</Link>
            <Link style = {styles.textLink} to = "/genre/awardwinning">Award-Winning</Link>
            <Link style = {styles.textLink} to = "/genre/reallife">Based on a Real Life</Link>
            <Link style = {styles.textLink} to = "/genre/asian">Asian</Link>
            <Link style = {styles.textLink} to = "/genre/violent">Violent</Link>

        </div>
    )
}

export default Header