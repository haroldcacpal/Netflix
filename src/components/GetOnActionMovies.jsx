import MoviesPerGenre from "./MoviesPerGenre";

const GetOnActionMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/get-in-on-action/alita-the-battle-angel.webp",
            title: "Alita Battle Angel"
        },
        {
            image: "http://127.0.0.1:9000/netflix/get-in-on-action/money-heist.jpg",
            title: "Money Heist"
        },
        {
            image: "http://127.0.0.1:9000/netflix/get-in-on-action/paul-vs-tyson.jpg",
            title: "Paul Vs Tyson"
        },
        {
            image: "http://127.0.0.1:9000/netflix/get-in-on-action/prison-break.webp",
            title: "Prison Break"
        },
        {
            image: "http://127.0.0.1:9000/netflix/get-in-on-action/taxi-driver.webp",
            title: "Taxi Driver"
        }
    ];

    return (
        <MoviesPerGenre title="Get In On the Action" movies={movies} />
    );
};

export default GetOnActionMovies;
