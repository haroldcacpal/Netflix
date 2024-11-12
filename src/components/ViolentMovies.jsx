import MoviesPerGenre from "./MoviesPerGenre";

const ViolentMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/violent/elysium.webp",
            title: "Elysium"
        },
        {
            image: "http://127.0.0.1:9000/netflix/violent/medieval.webp",
            title: "Medieval"
        },
        {
            image: "http://127.0.0.1:9000/netflix/violent/polar.jpg",
            title: "Polar"
        },
        {
            image: "http://127.0.0.1:9000/netflix/violent/uprising.jpg",
            title: "Uprising"
        },
        {
            image: "http://127.0.0.1:9000/netflix/violent/world-war-z.webp",
            title: "World War Z"
        }
    ];

    return (
        <MoviesPerGenre title="Violent Movies" movies={movies} />
    );
};

export default ViolentMovies;
