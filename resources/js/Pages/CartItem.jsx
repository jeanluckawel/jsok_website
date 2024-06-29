export default function CartItem ({product}) {
    return <>
        <div className="w-full flex items-center space-x-2 p-2 border rounded text-gray-700">
            <div>
                <img className="rounded w-16"
                     src={product.photoUrl} alt={product.designation}/>
            </div>
            <div className="flex flex-col">
                <span className="block leading-relaxed font-semibold text-xs">{product.designation}</span>
                <span className="block leading-relaxed font-normal text-xs">Price: <span>{product.price}$</span></span>
                <span className="block leading-relaxed text-xs">Qty: <span>{product.stock}pc</span></span>
            </div>
        </div>
    </>
}
