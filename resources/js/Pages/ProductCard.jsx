export default function ProductCard(Product) {
    return(
        <div className="w-full flex flex-col text-gray-700 grow shrink">
            <div>
                <img className="rounded-2xl"
                    src="https://placehold.co/400" alt="Product Image"/>
            </div>
            <div className="mt-4 font-semibold">
                <legend>
                    <span className="block leading-relaxed">Apple Mac Book Pro(M2)</span>
                    <span className="block leading-relaxed font-normal">Price: <span>2300$</span></span>
                    <span className="block leading-relaxed">Stock: <span>150 pc</span></span>
                </legend>
            </div>
        </div>
    )
}
