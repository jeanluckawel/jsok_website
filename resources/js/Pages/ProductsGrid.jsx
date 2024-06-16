import ProductCard from "./ProductCard.jsx";

export const ProductsGrid = ({products}) => {
    return (
        <div
            key="productGrid"
            className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {
                products.map(product => (
                    <ProductCard product={product}/>
                ))
            }

        </div>
    )
}
