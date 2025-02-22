import Link from "next/link";

interface Props {
    title : string;
    href : string;
    variant? : 'default' | 'border';
    otherStyles? : string;
    textColor? : string
}

export const CustomButton = ({ title, href, otherStyles, variant='default', textColor } : Props) => {
    if (variant === 'default') {
        return (
            <Link 
            className={`bg-gradient rounded-full font-bold px-4 py-2 text-xl h-fit text-gray-950`}
            href={href}>
                <div style={{ color : textColor }} className="text-center mx-auto">
                    {title}
                </div>
            </Link>
        )
    }
    if (variant === 'border') {
        return (
            <Link 
            className={`rounded-full font-bold p-1 bg-gradient text-xl h-fit ${otherStyles}`}
            href={href}>
                <div className="bg-gray-950 px-4 py-2 rounded-full">
                    <div className="text-center text-gradient w-full">
                    {title}
                    </div>
                </div>
            </Link>
        )
    }
}