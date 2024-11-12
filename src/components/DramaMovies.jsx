import MoviesPerGenre from "./MoviesPerGenre";

const DramaMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/drama/gifted.webp",
            title: "Gifted"
        },
        {
            image: "http://127.0.0.1:9000/netflix/drama/hello-love-goodbye.webp",
            title: "Hello, Love, Goodbye"
        },
        {
            image: "http://127.0.0.1:9000/netflix/drama/my-ex-and-whys.webp",
            title: "My Ex and Whys"
        },
        {
            image: "http://127.0.0.1:9000/netflix/drama/rewind.webp",
            title: "Rewind"
        },
        {
            image: "http://127.0.0.1:9000/netflix/drama/titanic.webp",
            title: "Titanic"
        }
    ];

    return (
        <MoviesPerGenre title="Drama" movies={movies} />
    );
};

export default DramaMovies;
