/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages : ['three'],
    images : {
        remotePatterns : [
            {
                hostname : 'images.unsplash.com',
                protocol : 'https'
            },
            {
                hostname : 'res.cloudinary.com',
                protocol : 'https'
            },
        ]
    }
};

export default nextConfig;
