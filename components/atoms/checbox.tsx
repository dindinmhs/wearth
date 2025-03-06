interface Props {
    title : string
}

export const CheckBox = ({title}:Props) => {
    return (
        <label className="flex gap-2 items-center">
            <input type="checkbox" className="peer hidden"/>
            <div className="w-5 h-5 border-2 border-gray-500 rounded-md peer-checked:bg-forest peer-checked:border-forest transition">
                <svg className="peer-checked:block w-4 h-4 text-gray-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <span>{title}</span>
        </label>
    )
}