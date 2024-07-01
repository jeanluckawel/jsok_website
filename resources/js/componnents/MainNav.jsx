import {Link} from "@inertiajs/react";
import {Anchor, Drawer} from "antd";
import {useState} from "react";

export default function MainNav({onClickOnCart, cartItemsCount}) {
    const [open, setOpen] = useState(false);
    function showDrawer() {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav className="mx-4 text-[0.9rem] text-gray-800">
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
                        <div>
                            <button onClick={onClickOnCart} className="flex items-center font-normal">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                {
                                    cartItemsCount !== 0 ?
                                    <div className='flex items-center justify-center relative -top-2 right-3 max-w-full max-h-full bg-blue-500 rounded-md'>
                                        <span
                                        className="p-1 text-[0.6rem] font-semibold text-white">{cartItemsCount}</span>
                                    </div>

                                        : <></>
                                }
                            </button>
                        </div>

                    </div>
                </div>

                {/*MOBIL MENU*/}
                <Drawer
                    open={open}
                    onClose={onClose}
                    title="Menu"
                    placement="left"
                >
                    <Anchor
                        affix={false}
                        items={[
                            {
                                key: '1',
                                href: "#",
                                title: "Home"
                            },
                            {
                                key: '2',
                                href: "#",
                                title: "Search"
                            },
                            {
                                key: '3',
                                href: "#",
                                title: "About"
                            },
                        ]}/>
                    </Drawer>
                </div>
        </nav>
)
}
