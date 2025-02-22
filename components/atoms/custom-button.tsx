import Link from "next/link";

interface Props {
    title : string;
    href : string;
    variant? : 'default' | 'border';
    otherStyles? : string;
}

export const CustomButton = ({ title, href, otherStyles, variant='default' } : Props) => {
    if (variant === 'default') {
        return (
            <Link 
            className={`bg-gradient rounded-full font-bold px-4 py-2 text-xl h-fit text-gray-950`}
            href={href}>
                {title}
            </Link>
        )
    }
    if (variant === 'border') {
        return (
            <Link 
            className={`rounded-full border-2 border-blue-400 font-bold px-4 py-2 text-xl h-fit text-blue-400 text-center ${otherStyles}`}
            href={href}>
                {title}
            </Link>
        )
    }
}