/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.externals.push("pino-pretty", "lokijs", "encoding");
		return config;
	},

	images: {
		domains: [
			"ipfsfiles.distant.finance",
			"images.remotePatterns",
			"ipfs.raribleuserdata.com",
			"nftmedia.parallelnft.com",
			"api.rarible.org",
		],
	},
};

export default nextConfig;
