export default function TopBar({ variants, score }) {
    
    return (
        <nav className="flex justify-between w-3/5 border-gray-400 border-2 border-solid rounded-3xl p-6">
            <ul className=" [&>*]:text-2xl [&>*]:uppercase [&>*]:leading-5 list-none">
                {variants.map(variant => <li key={ variant.id }>{ variant.name }</li>)}
            </ul>
            <aside className="grid place-tems-center bg-white rounded-xl px-12 py-3">
                <h3 className="text-blue-700">SCORE</h3>
                <h1 className="text-gray-600 text-5xl text-center">{score}</h1>
            </aside>
        </nav>
    )
};
