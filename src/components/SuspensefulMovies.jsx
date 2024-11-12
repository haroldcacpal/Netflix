import MoviesPerGenre from "./MoviesPerGenre";

const SuspensefulMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/suspenseful/brazen.jpg",
            title: "Brazen"
        },
        {
            image: "http://127.0.0.1:9000/netflix/suspenseful/dont-move.jpg",
            title: "Don't Move"
        },
        {
            image: "http://127.0.0.1:9000/netflix/suspenseful/intrusion.jpg",
            title: "Intrusion"
        },
        {
            image: "http://127.0.0.1:9000/netflix/suspenseful/kidnap.webp",
            title: "Kidnap"
        },
        {
            image: "http://127.0.0.1:9000/netflix/suspenseful/the-guilty.jpg",
            title: "The Guilty"
        }
    ];

    return (
        <MoviesPerGenre title="Suspenseful" movies={movies} />
    );
};

export default SuspensefulMovies;
