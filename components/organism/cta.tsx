import { ButtonLink } from "../atoms";

export const CtaSection = () => {
    return (
        <section className="relative flex justify-center items-center h-[600px] overflow-hidden">
            {/* Background dengan Efek Parallax */}
            <div
                className="absolute inset-0 bg-[url('https://res.cloudinary.com/dokktqvdq/image/upload/v1741482239/15301084332_1_qku0kl.jpg')] 
                bg-cover bg-center bg-fixed -z-10"
            />

            {/* Overlay Gradasi */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                    Join the Sustainable Fashion Movement!
                </h2>
                <p className="text-lg lg:text-xl mb-6">
                    Discover eco-friendly fashion and give your clothes a second life.
                </p>
                <ButtonLink href='/explore' title='Explore Now' />
            </div>
        </section>
    );
};
