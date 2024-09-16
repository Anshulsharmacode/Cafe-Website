/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com","source.unsplash.com"], // Correct hostname for Unsplash images
        // Add any other domains if necessary, like opengameart.org
        // domains: ["images.unsplash.com", "opengameart.org"],
    },
};

export default nextConfig;
