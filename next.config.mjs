import { withPayload } from '@payloadcms/next/withPayload'

// Helper to safely extract hostname from URL
const getHostname = (url) => {
    try {
        return url ? new URL(url).hostname : 'localhost';
    } catch {
        return 'localhost';
    }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: getHostname(process.env.NEXT_PUBLIC_SERVER_URL),
            },
        ],
    },
};

export default withPayload(nextConfig);
