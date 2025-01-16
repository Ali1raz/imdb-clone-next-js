export default function Results({results}) {

    return (
        <div>
            {results.map(movie => (
                <div key={movie.id}>{movie.original_title}</div>
            ))}
        </div>
    )
}