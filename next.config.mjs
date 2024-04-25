/** @type {import('next').NextConfig} */
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the current file's path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    output: 'standalone',
    experimental: {
        // this includes files from the monorepo base two directories up
        outputFileTracingIncludes: {  "/": ["/app"]}
    },
};

export default nextConfig;
