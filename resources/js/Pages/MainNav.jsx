import {Link, router} from "@inertiajs/react";

export default function MainNav() {
    return (
        <nav className="container mx-12 flex justify-between items-center py-4 font-semibold">
            <div className="flex items-center">
                <Link href="#">
                    <span className="rounded-3xl">Home</span>
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <Link href="#">
                    <span className="rounded-3xl">Search</span>
                </Link>
                <Link href="#">
                    <span className="rounded-3xl">About</span>
                </Link>
                <Link href="#">
                    <span className="rounded-3xl"></span>
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <Link href="#">
                    <span className="rounded-3xl">Login</span>
                </Link>
                <Link href="#">
                    <div className="flex items-center">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
