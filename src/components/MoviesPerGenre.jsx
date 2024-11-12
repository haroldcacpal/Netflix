import movieStyles from "../assets/styles/movie-styles"
import MovieFrame from "./MovieFrame"

const MoviesPerGenre = ({title, movies}) =>  {
    const styles = {
        container : {
            display : "flex",
            flexDirection : "column",
            padding : 20,
            paddinLeft : 20,
            marginTop : 10
        },
        genre : {
            fontFamily : "Helvetica",
            fontSize : 16, 
            fontWeight : "bold",
            marginBottom : 10
        }
    }

    return (
        <>
            <div style = {styles.container}>
                <span style = {styles.genre} >{title}</span>
                <div style = {movieStyles}>
                    {
                        movies.map(movie =>  (
                            <MovieFrame movieImage={movie.image} movieTitle={movie.title}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}   

export default MoviesPerGenre