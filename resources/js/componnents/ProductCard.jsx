import {Image} from "antd";
import {useEffect, useState} from "react";

export default function ProductCard({ product, handleAddToCart }) {
    const [isLoading, setIsLoading] = useState(true)
    const [productCopy] = useState({
        id:product.id,
        designation: product.designation,
        price: product.price,
        photoUrl:product.photoUrl,
        qty: 1
    })

    useEffect(() => {
        setIsLoading(false)
    }, [isLoading]);

    return(
        <div key={product.id} className="w-full min-w-[100px] flex flex-col justify-between space-y-2 text-gray-700 border rounded-t-2xl rounded-b-md p-2 shadow">
            <div className="">
                {isLoading ? (
                    <div className="h-64 rounded-t-2xl bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse"></div>
                ) : (
                    <Image
                        className="rounded-md w-fit"
                        onLoad={() => setIsLoading(false)}
                        src={product.photoUrl} alt={product.designation}
                        loading="lazy"
                    />
                )}

                <span className="font-semibold text-[0.9rem] block leading-relaxed">{product.designation}</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="font-semibold text-[0.9rem]">
                    <legend>
                        <span className="block leading-relaxed font-normal">Price: <span>{product.price}</span></span>
                        <span className="block leading-relaxed">Stock: <span>{product.stock} pc</span></span>
                    </legend>
                </div>
                <div className="">
                    <button onClick={() => handleAddToCart(productCopy)}
                            className="flex justify-center items-center p-3 rounded-md border hover:scale-105 text-gray-700 font-semibold text-[0.9rem] transition-colors duration-300">
                        <span className="material-symbols-outlined">shopping_cart</span></button>

                </div>
            </div>
        </div>
    )
}
