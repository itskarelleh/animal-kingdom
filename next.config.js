/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => [
        {
            source: '/:admin*',
            destination: '/api/:admin*',
        },
    ],
}

module.exports = nextConfig
