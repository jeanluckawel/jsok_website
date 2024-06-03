export default function CartItem () {
    return <>
        <div className="w-full flex items-center space-x-2 p-2 border rounded text-gray-700">
            <div>
                <img className="rounded"
                     src="https://picsum.photos/seed/picsum/60" alt=""/>
            </div>
            <div className="flex flex-col">
                <span className="block leading-relaxed font-semibold text-xs">Apple Mac Book Pro(M2)</span>
                <span className="block leading-relaxed font-normal text-xs">Price: <span>2300$</span></span>
                <span className="block leading-relaxed text-xs">Qty: <span>12pc</span></span>
            </div>
        </div>
    </>
}
