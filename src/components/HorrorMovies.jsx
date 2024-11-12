import MoviesPerGenre from "./MoviesPerGenre";

const HorrorMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/horror/alive.jpg",
            title: "#Alive"
        },
        {
            image: "http://127.0.0.1:9000/netflix/horror/hallow-ends.webp",
            title: "Halloween Ends"
        },
        {
            image: "http://127.0.0.1:9000/netflix/horror/IT.webp",
            title: "IT"
        },
        {
            image: "http://127.0.0.1:9000/netflix/horror/smile.webp",
            title: "Smile"
        },
        {
            image: "http://127.0.0.1:9000/netflix/horror/tarot.webp",
            title: "Tarot"
        }
    ];

    return (
        <MoviesPerGenre title="Horror" movies={movies} />
    );
};

export default HorrorMovies;
