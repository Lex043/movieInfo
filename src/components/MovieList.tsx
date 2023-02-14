interface Props {
    results: any;
}
const MovieList = ({results}: Props) => {
    return (
        <div className="py-8 grid gap-6 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            {results && results.map((result: any, index: number) => (
                <div key={index}
                >
                    <img src={result.Poster} alt="Movie Poster"/>
                    <div>
                        <h1>{result.Title}</h1>
                        <p>{result.Year}</p>
                        <p>{result.Type}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;