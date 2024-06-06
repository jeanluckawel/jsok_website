import {Link} from "@inertiajs/react";
import {Drawer} from "antd";
import {useState} from "react";

export default function MainNav({onClickOnCart}) {
    const [open, setOpen] = useState(false);
    function showDrawer() {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav className="mx-4">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center md:hidden">
                    <button onClick={showDrawer} className="flex items-center">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
                <div className="hidden md:flex items-center">
                    <Link href="#">
                        <span className="rounded-3xl font-semibold">Home</span>
                    </Link>
                </div>
                <div className="hidden md:flex gap-4 items-center">
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

                {/*MOBIL MENU*/}
                <Drawer
                    open={open}
                    onClose={onClose}
                    title="Menu"
                    placement="left"
                >
                    <nav className="flex flex-col space-y-2">
                        <Link className="w-full rounded-md p-2 bg-gray-50" href="#">
                            <span className="rounded-3xl font-semibold">Home</span>
                        </Link>
                        <Link className="w-full rounded-md p-2 bg-gray-50" href="#">
                            <span className="rounded-3xl">Search</span>
                        </Link>
                        <Link className="w-full rounded-md p-2 bg-gray-50" href="#">
                            <span className="rounded-3xl">About</span>
                        </Link>
                    </nav>
                </Drawer>
            </div>
        </nav>
)
}
