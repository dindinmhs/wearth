import Image from "next/image";

interface Props  {
    name : string;
    comment : string;
    src : string;
}

export const CardTestiominal = ({ comment, name, src } : Props) => {
    return (
        <div className="flex bg-gray-200 rounded-lg overflow-hidden h-40 w-[30rem]">
            <div className="w-96 h-full">
                <Image
                    src={src}
                    width={200}
                    height={200}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="py-3 px-4">
                <h4>{name}</h4>
                <p>{comment}</p>
            </div>
        </div>
    )
}