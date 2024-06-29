import Layout from "./Layout.jsx";
import SearchInput from "./SearchInput.jsx"
import {StrictMode, useEffect, useState} from "react";
import {ProductsGrid} from "./ProductsGrid.jsx";
import {router, usePage} from "@inertiajs/react";

export default function Home({products}) {
    const [productsCopy, setProductsCopy] = useState(Array.from(products))
    const [search, setSearch] = useState("")
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart)
                setCart(parsedCart)
            } catch (error) {
                console.log("Error while parsing data from localStorage", error)
                setCart([])
            }
        }
    }, []);

    const props = usePage().props
    const addToCart = async (product) => {
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
        setCart(JSON.parse(localStorage.getItem('cart')))

        router.post('/carts', {
            _token: props.csrf_token,
            designation: product.designation,
            price: product.price,
            stock: product.stock
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // NOT BLANK
        if (/^\s$/.test(search))
            return

        // NOT EMPTY
        if (!search) {
            setProductsCopy(Array.from(products))
            return
        }

        setProductsCopy(
            products.filter((product) => {
                return product.designation.toLowerCase().includes(search.toLowerCase())
            })
        )
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <StrictMode>
            <Layout cart={cart}>
                <section className="mt-12 w-full flex flex-col items-center">
                    <div className="mx-4 w-full">
                        <SearchInput
                            onSubmit={handleSubmit}
                            search={search}
                            handleSearch={handleSearch}
                        />
                    </div>
                </section>
                <section className="mt-12">
                    <div className="mx-4 flex justify-center">
                        {
                            productsCopy.length === 0 ? (
                                <div className="mt-16">
                                    <span className="text-3xl text-gray-700">No matching for term "<span className="text-red-500 font-semibold">{search}</span>" were found</span>
                                </div>
                            ) : (
                                <ProductsGrid products={productsCopy} handleAddToCart={addToCart}/>
                            )
                        }
                    </div>
                </section>
                <footer className="mb-12"></footer>
            </Layout>
        </StrictMode>
    )
}
