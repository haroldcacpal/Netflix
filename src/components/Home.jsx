import ActionMovies from "./ActionMovies"
import AsianMovies from "./AsianMovies"
import AwardWinningMovies from "./AwardWinningMovies"
import BlockbusterMovies from "./BlockbusterMovies"
import DramaMovies from "./DramaMovies"
import GetOnActionMovies from "./GetOnActionMovies"
import HorrorMovies from "./HorrorMovies"
import MoviesBasedOnRealLifeMovies from "./MoviesBasedOnRealLifeMovies"
import SuspensefulMovies from "./SuspensefulMovies"
import ViolentMovies from "./ViolentMovies"


const Home = () => {
    const styles = {
        container : {
            padding : 10,
            paddingLeft : 20,
            paddingTop: 60,
        },
        headerText : {
            fontFamily : "Helvetica",
        },
        text : {    
            fontFamily : "Helvetica",
            fontSize : 16,
            width : 600
        }
    }
   
    return (
        <>
            <div style = {styles.container}>
                <h1 style = {styles.headerText}>Movies</h1>
                <p style = {styles.text}>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
            </div>
            <ActionMovies/>
            <AsianMovies/>
            <AwardWinningMovies/>
            <BlockbusterMovies/>
            <DramaMovies/>
            <GetOnActionMovies/>
            <HorrorMovies/>
            <MoviesBasedOnRealLifeMovies/>
            <SuspensefulMovies/>
            <ViolentMovies/>
            
        </>
    )
}

export default Home