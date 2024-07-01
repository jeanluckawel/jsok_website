import {Head} from "@inertiajs/react";
import MainNav from "../componnents/MainNav.jsx";
import "../../css/app.css"
import {Drawer, Modal} from "antd";
import {useState} from "react";
import CartItem from "../componnents/CartItem.jsx";

export default function Layout({children, cart}){

    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function showDrawer() {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return <>
        <Head>
            <meta name="theme-color" content="#db5945"/>
            <meta property="og:title" content="Js Ok Website"/>
            <meta property="og:type" content="image/png"/>
            <meta property="og:url" content="http://localhost:8000/"/>
            <meta property="og:image" content="http://localhost:8000/images/preview.png"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"/>
        </Head>
        <div className="sticky w-full top-0 z-50 border-b bg-red-50 bg-opacity-30 backdrop-blur-sm">
            <MainNav onClickOnCart={showDrawer} cartItemsCount={cart.length}/>
        </div>
        <main className="container mx-auto text-[0.9rem]">
            {children}
        </main>
        <section>
            {/*CART DRAWER*/}
            <Drawer
                open={open}
                onClose={onClose}
                title="Cart items"
            >
                <section className="flex flex-col space-y-2 mb-10">
                    {cart.size !== 0 ?
                        cart.map(product => (
                            <CartItem product={product}/>
                        )): (<></>)
                    }
                </section>


                <section className="absolute bottom-4 w-full">
                    <div className="w-full">
                        <button onClick={showModal}
                                className="flex justify-center items-center space-x-2 min-w-[19.8rem] p-2 bg-blue-500 rounded font-bold text-white">
                            <span className="material-symbols-outlined">shopping_cart</span> <span>Checkout</span>
                        </button>
                    </div>
                </section>
            </Drawer>
        </section>

        <section>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={handleOk}
                title="Your Information's"
            >
                <form action="#" className="container mx-auto flex flex-col space-y-6 mt-8 w-full mb-8">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="inline-flex items-center">Your Name <span className="ml-1 text-red-500 font-semibold">*</span></label>
                        <div className="flex items-center w-full border rounded">
                            <div className="flex items-center p-2 border-r bg-gray-50 text-gray-600">
                                <span className="material-symbols-outlined">account_circle</span>
                            </div>
                            <input className="w-full rounded-r outline-none px-4 py-2"
                                type="text" placeholder="John Doe" id="name" required/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="phone" className="inline-flex items-center">Your Phone Number <span className="ml-1 text-red-500 font-semibold">*</span></label>
                        <div className="flex items-center w-full border rounded">
                            <div className="flex items-center p-2 border-r bg-gray-50 text-gray-600">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <input className="w-full rounded-r outline-none px-4 py-2"
                                type="text" id="phone" name="phone" placeholder="097 10 76 087" required/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="address" className="inline-flex items-center">Your Address <span className="ml-1 text-red-500 font-semibold">*</span></label>
                        <div className="flex items-center w-full border rounded">
                            <div className="flex items-center p-2 border-r bg-gray-50 text-gray-600">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <input className="w-full rounded-r outline-none px-4 py-2"
                                type="text" id="address" name="address" placeholder="25 Matobo/Lido Golf" required/>
                        </div>
                    </div>
                    <input type="submit" hidden={true}/>
                </form>
            </Modal>
        </section>
    </>
}
