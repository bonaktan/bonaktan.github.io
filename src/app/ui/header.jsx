import Link from "next/link"

export default function Header() {
    return (
        <div className="flex justify-around">
            <p>Header</p>
            <Link href={"/projects"}>Projects</Link>
        </div>
    )
}