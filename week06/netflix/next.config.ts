import type { NextConfig } from 'next'

// const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
// const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['image.tmdb.org'],
    },
};

// module.exports = withVanillaExtract(nextConfig)
module.exports = nextConfig
