import {Image} from "antd";
import {useEffect, useState} from "react";

export default function ProductCard({ product, handleAddToCart }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [isLoading]);

    return(
        <div key={product.id} className="w-fit min-w-[100px] flex flex-col justify-between space-y-2 text-gray-700 border rounded-t-2xl rounded-b-md p-2 shadow">
            <div className="">
                {isLoading ? (
                    <div className="h-64 rounded-t-xl bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse"></div>
                ) : (
                    <Image
                        className="rounded-t-2xl rounded-b-md w-fit"
                        onLoad={() => setIsLoading(false)}
                        src={product.photoUrl} alt={product.designation}
                        loading="lazy"
                    />
                )}

                <span className="font-semibold text-[0.9rem] block leading-relaxed">{product.designation}</span>
            </div>
            <div className="font-semibold text-[0.9rem]">
                <legend>
                    <span className="block leading-relaxed font-normal">Price: <span>{product.price}</span></span>
                    <span className="block leading-relaxed">Stock: <span>{product.stock} pc</span></span>
                </legend>
            </div>
            <button onClick={ () => handleAddToCart(product) } className="bg-amber-200 py-1 rounded-md text-gray-700 font-semibold hover:bg-amber-100 text-[0.9rem] transition-colors duration-300">Ajouter au Panier</button>
        </div>
    )
}
