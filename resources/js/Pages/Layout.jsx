import {Head} from "@inertiajs/react";
import MainNav from "./MainNav.jsx";
import "../../css/app.css"
import {Drawer, Image} from "antd";
import {useState} from "react";

export default function Layout({children, title}){

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
                <section className="w-full flex items-center space-x-2 p-2 border rounded text-gray-700">
                    <div>
                        <img className="rounded"
                            src="https://placehold.co/60" alt=""/>
                    </div>
                    <div className="flex flex-col">
                        <span className="block leading-relaxed font-semibold text-xs">Apple Mac Book Pro(M2)</span>
                        <span className="block leading-relaxed font-normal text-xs">Price: <span>2300$</span></span>
                        <span className="block leading-relaxed text-xs">Qty: <span>12pc</span></span>
                    </div>
                </section>
                <section className="absolute bottom-4 w-full">
                    <div className="w-full">
                        <button className="min-w-[21rem] p-2 bg-blue-500 rounded font-bold text-white">Checkout</button>
                    </div>
                </section>
            </Drawer>
        </section>
    </>
}
