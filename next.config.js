const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias["@mixins"] = path.join(
            __dirname,
            "src/scss/mixins.scss"
        );
        return config;
    },
}


module.exports = nextConfig