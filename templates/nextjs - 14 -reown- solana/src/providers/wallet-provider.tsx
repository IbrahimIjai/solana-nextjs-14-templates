"use client";

import React, { useEffect, useState } from "react";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
// import { AppKitProvider } from "@reown/appkit/react";
import {
	PhantomWalletAdapter,
	SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
	wallets: [
		//@ts-expect-error: unknowntypes
		new BackpackWalletAdapter(),
		//@ts-expect-error: unknowntypes
		new SolflareWalletAdapter(),
		//@ts-expect-error: unknowntypes
		new PhantomWalletAdapter(),
	],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = "b75692016ff3a6cb38a9ad73ff9c4aa7";

// 2. Create a metadata object - optional
const metadata = {
	name: "AppKit",
	description: "AppKit Solana Example",
	url: "https://example.com", // origin must match your domain & subdomain
	icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Create modal
const initializeAppKit = () => {
	createAppKit({
		adapters: [solanaWeb3JsAdapter],
		networks: [solana, solanaTestnet, solanaDevnet],
		metadata: metadata,
		projectId,
		features: {
			analytics: true,
		},
	});
};

export default function AppWalletProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (!initialized) {
			initializeAppKit();
			setInitialized(true);
		}
	}, [initialized]);

	if (!initialized) {
		return null; // or a loading spinner
	}

	return <>{children}</>;
}
