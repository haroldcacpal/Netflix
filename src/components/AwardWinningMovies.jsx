import MoviesPerGenre from "./MoviesPerGenre";

const AwardWinningMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/award-winning/body-guard.jpg",
            title: "Bodyguard"
        },
        {
            image: "http://127.0.0.1:9000/netflix/award-winning/clickbait.jpg",
            title: "Clickbait"
        },
        {
            image: "http://127.0.0.1:9000/netflix/award-winning/hungry.jpg",
            title: "Hunger"
        },
        {
            image: "http://127.0.0.1:9000/netflix/award-winning/pulp-fiction.webp",
            title: "Pulp Fiction"
        },
        {
            image: "http://127.0.0.1:9000/netflix/award-winning/spirited-away.webp",
            title: "Spirited Away"
        }
    ];

    return (
        <MoviesPerGenre title="Award-Winning" movies={movies} />
    );
};

export default AwardWinningMovies;
