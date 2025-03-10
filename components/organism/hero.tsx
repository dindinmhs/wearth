import { ButtonLink } from '../atoms';

export const HeroSection = () => {
    return (
        <section className="relative h-[75vh] flex items-center justify-center overflow-hidden container rounded-lg mx-auto">
            <div 
                className="absolute inset-0 bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dokktqvdq/image/upload/v1741482239/15301084332_1_qku0kl.jpg')`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">Redefining Fashion for a Greener Future</h1>
                <p className="text-lg mb-6">
                    Discover sustainable fashion through secondhand shopping, barter deals, and eco-conscious missions.
                </p>
                <ButtonLink href='/explore' title='Explore Now'/>
            </div>
        </section>
    );
};




