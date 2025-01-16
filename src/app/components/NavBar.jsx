import NavBarItem from "./NavBarItem"

export default function NavBar () {
    return (
        <nav className="flex items-center justify-center gap-8 py-4 dark:text-gray-800 dark:bg-gray-200 bg-orange-500">
            <NavBarItem title="Trending" param="fetchTrending" />
            <NavBarItem title="Top Rated" param="fetchTopRated" />
        </nav>
    )
}