import Layout from "./Layout.jsx";
import ProductCard from "./ProductCard.jsx";
import SearchInput from "./SearchInput.jsx"

export default function Home({products}) {

    return (
        <Layout>
            <section className="mt-12 w-full flex flex-col items-center">
                <div className="mx-4 w-full">
                    <SearchInput/>
                </div>
            </section>
            <section className="mt-12">
                <div className="mx-4 flex">
                    <div
                        className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                        {
                            products.map(product => (
                                <ProductCard product={product}/>
                            ))
                        }

                    </div>
                </div>
            </section>
            <footer className="mb-12"></footer>
        </Layout>
    )
}
