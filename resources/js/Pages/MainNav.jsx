import {Link} from "@inertiajs/react";

export default function MainNav({onClickOnCart}) {
    return (
        <nav className="container mx-auto flex justify-between items-center py-4">
            <div className="flex items-center">
                <Link href="#">
                    <span className="rounded-3xl font-semibold">Home</span>
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
                <div className="flex items-center">
                    <button onClick={onClickOnCart} className="flex items-center font-normal">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
