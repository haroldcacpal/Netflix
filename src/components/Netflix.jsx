import DramaMovies from "./DramaMovies";
import BlockbusterMovies from "./BlockbusterMovies";
import WebRouter from "./common/WebRouter";
import Header from "./header";
import Home from "./Home";
import GetOnActionMovies from "./GetOnActionMovies"; 
import HorrorMovies from "./HorrorMovies";
import SuspensefulMovies from "./SuspensefulMovies";
import AwardWinningMovies from "./AwardWinningMovies"; 
import MoviesBasedOnRealLifeMovies from "./MoviesBasedOnRealLifeMovies"; 
import AsianMovies from "./AsianMovies";
import ViolentMovies from "./ViolentMovies";
import ActionMovies from "./ActionMovies";

const Netflix = () => {
    const routes = [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/genre/drama",
            element : <DramaMovies/>
        },
        {
            path : "/genre/blockbuster",
            element : <BlockbusterMovies/>
        },
        {
            path : "/genre/action&adventure",
            element : <ActionMovies/>
        },
        {
            path : "/genre/getonaction",
            element : <GetOnActionMovies/> 
        },
        {
            path : "/genre/horror",
            element : <HorrorMovies/>
        },
        {
            path : "/genre/suspenseful",
            element : <SuspensefulMovies/>
        },
        {
            path : "/genre/awardwinning",
            element : <AwardWinningMovies/> 
        },
        {
            path : "/genre/reallife",
            element : <MoviesBasedOnRealLifeMovies/> 
        },
        {
            path : "/genre/asian",
            element : <AsianMovies/>
        },
        {
            path : "/genre/violent",
            element : <ViolentMovies/>
        }
    ];
    return (
        <WebRouter header = {<Header/>} routes = {routes}/> 
    );
}

export default Netflix;
