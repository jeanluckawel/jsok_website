import Layout from "./Layout.jsx";
import ProductCard from "./ProductCard.jsx";
import SearchInput from "./SearchInput.jsx"

export default function Home({products}) {
    return (
        <Layout>
            <section className="mt-12 w-full flex flex-col items-center">
                <div className="w-full max-w-[568px]">
                    <SearchInput/>
                </div>
            </section>
            <section className="mt-12">
                <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </section>
            <footer className="mb-12"></footer>
        </Layout>
    )
}
