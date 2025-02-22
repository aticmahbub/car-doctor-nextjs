/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                // port: '',
                // pathname: '/account123/**',
                // search: '',
            },
        ],
    },
};

export default nextConfig;
