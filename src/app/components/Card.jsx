import Link from "next/link";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";

export default function Card ({ movie }) {
    return (
        <div className="group cursor-pointer transition duration-200 sm:hover:shadow-slate-400 sm:border sm:border-gray-200 sm:m-2">
            <Link href={`/movie/${movie.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                width={500}
                height={300}
                alt={`${movie.original_title}`}
                className="group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="m-2">
                <p className="line-clamp-2 text-md">{movie.overview}</p>
                <h2 className="text-lg font-bold truncate">{movie.title || movie.name}</h2>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>{movie.result_date || movie.first_air_date} •{" "}</span>
                    <span className="flex items-center gap-1"><FaThumbsUp /> {movie.vote_count}</span>
                </div>
            </div>
            </Link>

        </div>
    )
}