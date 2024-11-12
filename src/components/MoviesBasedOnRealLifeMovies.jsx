import MoviesPerGenre from "./MoviesPerGenre";

const MoviesBasedOnRealLifeMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/basedonreallife/chernobyl-1986.jpg",
            title: "Chernobyl 1986"
        },
        {
            image: "http://127.0.0.1:9000/netflix/basedonreallife/devotion.jpg",
            title: "Devotion"
        },
        {
            image: "http://127.0.0.1:9000/netflix/basedonreallife/ip-man-2.webp",
            title: "IP Man 2"
        },
        {
            image: "http://127.0.0.1:9000/netflix/basedonreallife/the-day-after-tomorrow.webp",
            title: "The Day After Tomorrow"
        },
        {
            image: "http://127.0.0.1:9000/netflix/basedonreallife/the-good-nurse.jpg",
            title: "The Good Nurse"
        }
    ];

    return (
        <MoviesPerGenre title="Movies Based on Real Life" movies={movies} />
    );
};

export default MoviesBasedOnRealLifeMovies;
