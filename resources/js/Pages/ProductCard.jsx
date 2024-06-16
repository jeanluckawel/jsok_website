import {Image} from "antd";
import {useEffect, useState} from "react";

export default function ProductCard({ product }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [isLoading]);

    return(
        <div key={product.id} className="w-fit min-w-[300px] flex flex-col space-y-2 text-gray-700 border rounded-t-2xl rounded-b-md p-2 shadow">
            <div className="h-72">
                {isLoading ? (
                    <div className="h-64 rounded-t-xl bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse"></div>
                ): (
                    <Image
                        className="rounded-t-2xl rounded-b-md"
                        onLoad={() => setIsLoading(false)}
                        src={product.photoUrl} alt={product.designation}
                        loading="lazy"
                    />
                    )}
            </div>
            <div className="font-semibold text-[0.9rem]">
                <legend>
                    <span className="block leading-relaxed">{product.designation}</span>
                    <span className="block leading-relaxed font-normal">Price: <span>{product.price}</span></span>
                    <span className="block leading-relaxed">Stock: <span>{product.stock} pc</span></span>
                </legend>
            </div>
            <button className="bg-amber-200 py-1 rounded-md text-gray-700 font-semibold hover:bg-amber-100 text-[0.9rem] transition-colors duration-300">Ajouter au Panier</button>
        </div>
    )
}
