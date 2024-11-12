import MoviesPerGenre from "./MoviesPerGenre";

const ActionMovies = () => {
    const movies = [
        {
            image: "http://localhost:9000/netflix/action/John Wick.webp",
            title: "John Wick"
        },
        {
            image: "http://127.0.0.1:9000/netflix/action/Kingsman the golden circle.webp",
            title: "Kingsman the Golden Circle"
        },
        {
            image: "http://127.0.0.1:9000/netflix/action/London has Fallen.webp",
            title: "London has Fallen"
        },
        {
            image: "http://127.0.0.1:9000/netflix/action/The Equalizer 3.webp",
            title: "The Equalizer 3"
        },
        {
            image: "http://127.0.0.1:9000/netflix/action/war zone punisher.webp",
            title: "War Zone Punisher"
        }
    ];

    return (
        <MoviesPerGenre title="Action and Adventure" movies={movies} />
    );
};

export default ActionMovies;
