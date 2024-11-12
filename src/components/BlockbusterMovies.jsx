
import MoviesPerGenre from "./MoviesPerGenre";

const BlockbusterMovies = () => {
    const movies = [
        {
            image: "http://127.0.0.1:9000/netflix/blockbuster/geostorm.webp",
            title: "Geostorm"
        },
        {
            image: "http://127.0.0.1:9000/netflix/blockbuster/lucy.webp",
            title: "Lucy"
        },
        {
            image: "http://127.0.0.1:9000/netflix/blockbuster/passengers.webp",
            title: "Passengers"
        },
        {
            image: "http://127.0.0.1:9000/netflix/blockbuster/rampage.webp",
            title: "Rampage"
        },
        {
            image: "http://127.0.0.1:9000/netflix/blockbuster/venom.webp",
            title: "Venom: Let There Be Carnage"
        }
    ];

    return (
        <MoviesPerGenre title="Blockbuster" movies={movies} />
    );
};

export default BlockbusterMovies;
