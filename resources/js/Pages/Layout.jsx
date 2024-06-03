import {Head} from "@inertiajs/react";
import MainNav from "./MainNav.jsx";
import "../../css/app.css"
import {Drawer} from "antd";
import {useState} from "react";
import CartItem from "./CartItem.jsx";

export default function Layout({children}){

    const [open, setOpen] = useState(false);
    function showDrawer() {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false);
    };

    return <>
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"/>
        </Head>
        <MainNav onClickOnCart={showDrawer}/>
        <hr/>
        <main className="container mx-auto">
            {children}
        </main>
        <section>
            <Drawer
                open={open}
                onClose={onClose}
                title="Cart items"
            >
                <section className="flex flex-col space-y-2">
                    <CartItem/>
                    <CartItem/>
                </section>


                <section className="absolute bottom-4 w-full">
                    <div className="w-full">
                        <button className="flex justify-center items-center space-x-2 min-w-[21rem] p-2 bg-blue-500 rounded font-bold text-white"><span className="material-symbols-outlined">shopping_cart</span> <span>Checkout</span>
                        </button>
                    </div>
                </section>
            </Drawer>
        </section>
    </>
}
