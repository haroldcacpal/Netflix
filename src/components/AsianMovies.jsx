import MoviesPerGenre from "./MoviesPerGenre";

const AsianMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/asian/fruitcake.webp",
            title: "Fruitcake"
        },
        {
            image: "http://127.0.0.1:9000/netflix/asian/Kungfu-hustle.webp",
            title: "Kung Fu Hustle"
        },
        {
            image: "http://127.0.0.1:9000/netflix/asian/lolo-and-the-kid.jpg",
            title: "Lolo and the Kid"
        },
        {
            image: "http://127.0.0.1:9000/netflix/asian/midnight-runners.webp",
            title: "Midnight Runners"
        },
        {
            image: "http://127.0.0.1:9000/netflix/asian/the-entitled.jpg",
            title: "The Entitled"
        }
    ];

    return (
        <MoviesPerGenre title="Asian Movies" movies={movies} />
    );
};

export default AsianMovies;
