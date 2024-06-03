import {Head} from "@inertiajs/react";
import MainNav from "./MainNav.jsx";
import "../../css/app.css"

export default function Layout({children, title}){
    return <>
        <Head>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"/>
        </Head>
        <MainNav/>
        <hr/>
        <main className="container mx-12">
            {children}
        </main>
    </>
}
