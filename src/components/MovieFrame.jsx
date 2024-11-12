
const MovieFrame = ({ movieImage, movieTitle}) => {
    const styles = {
        container :{
            display: "inline-block",
        },
        movie: {
            display : "flex",
            flexDirection : "column",
            alignItems: "center"
        },
        title : {
            fontFamily : "Helvetica",
            fontSize: 16,
            padding : 10,
        
        }
    }
    return (
        <>
            <div style = { styles.container } >
                <div style = { styles.movie } >
                   <img src = { movieImage }/>
                   <span styles = { styles.title }>{ movieTitle }</span>
                </div>
            </div>
        
        </>
    )
}

export default MovieFrame