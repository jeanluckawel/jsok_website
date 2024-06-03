export default function SearchInput() {
    return(
        <form>
            <div className="w-full inline-flex items-center border rounded-full p-1">
                <input className="w-full rounded-l-full p-3 outline-none font-semibold"
                    type="text"/>
                <div className="flex items-center p-3 rounded-full bg-red-500 text-white">
                    <span className="material-symbols-outlined">search</span>
                </div>
            </div>
        </form>
    )
}
