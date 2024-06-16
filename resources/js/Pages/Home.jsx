import Layout from "./Layout.jsx";
import SearchInput from "./SearchInput.jsx"
import {StrictMode, useState} from "react";
import {ProductsGrid} from "./ProductsGrid.jsx";

export default function Home({products}) {
    const [productsCopy, setProductsCopy] = useState(Array.from(products))
    const [search, setSearch] = useState("")

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
            <Layout>
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
                                <ProductsGrid products={productsCopy}/>
                            )
                        }
                    </div>
                </section>
                <footer className="mb-12"></footer>
            </Layout>
        </StrictMode>
    )
}
