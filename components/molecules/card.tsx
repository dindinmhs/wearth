import Image from "next/image";

interface Props  {
    name : string;
    comment : string;
    src : string;
}

export const CardTestiominal = ({ comment, name, src } : Props) => {
    return (
        <div className="flex gap-2 bg-gray-200 rounded-lg h-40 w-[30rem]">
            <div className="w-32 h-full">
                <Image
                    src={src}
                    width={200}
                    height={200}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="py-3">
                <h4>{name}</h4>
                <p>{comment}</p>
            </div>
        </div>
    )
}