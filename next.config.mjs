/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.js
const nextConfig = {
    webpack(config, { isServer }) {
        // For importing video files
        config.module.rules.push({
            test: /\.(mp4|webm|ogg)$/, // Add the video formats you need
            use: {
                loader: 'file-loader',
                options: {
          name: 'static/videos/[name].[hash].[ext]',
        },
      },
    });

    return config;
},
};

export default nextConfig;
