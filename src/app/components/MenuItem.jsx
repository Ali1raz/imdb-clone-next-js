import Link from "next/link";

export default function MenuItem ({title, Icon, path}) {
    return (
        <Link href={path} className="flex items-center cursor-pointer space-x-2 hover:text-orange-500">
            <Icon className=" text-sm" />
            <p className="sm:inline hidden uppercase text-sm">{title}</p>
        </Link>
    )
}