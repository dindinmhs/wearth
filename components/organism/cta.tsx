import Image from "next/image";

export const CtaSection = () => {
    return (
        <section className="relative flex justify-center items-center h-[600px] overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://res.cloudinary.com/dokktqvdq/image/upload/v1741482239/15301084332_1_qku0kl.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="-z-10"
            />

            {/* Overlay Gradasi */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-4xl lg:text-6xl font-bold mb-4">Join the Sustainable Fashion Movement!</h2>
                <p className="text-lg lg:text-xl mb-6">
                    Discover eco-friendly fashion and give your clothes a second life.
                </p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
                    Explore Now
                </button>
            </div>
        </section>
    );
};
