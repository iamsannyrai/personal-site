import Link from "next/link";

export function Navbar() {
    return <div className="flex h-16 bg-gray-50 items-center px-4 md:px-8 justify-between shadow-sm">
        <Link href="/"><a><h1 className="text-xl font-bold">Sanny Rai</h1></a></Link>
    </div>
}