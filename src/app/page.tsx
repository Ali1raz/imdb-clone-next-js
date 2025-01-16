const API_KEY = process.env.API_KEY;
import Results from './components/Results'

export default async function Home({searchParams}) {
  let genre = searchParams?.genre || 'fetchTrending';

  const res = await fetch(`https://api.themoviedb.org/3/${
    genre === 'fetchTrending' ? `trending/all/week` : `movie/top_rated`
  }?api_key=${API_KEY}&language=en-US&page=1`, {
    next: {revalidate: 3600}
  });
  
  const data = await res.json();
  if (!res.ok) {
    const errorMessage = `Failed to fetch data: ${res.status} ${res.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  const results = data.results;

  return (
    <div className="">
      <Results results={results}/>
    </div>
  );
}
