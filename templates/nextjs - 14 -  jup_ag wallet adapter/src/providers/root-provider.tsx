"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import AppWalletProvider from "./wallet-provider";

function RootProvider({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange>
			<AppWalletProvider>{children}</AppWalletProvider>
		</ThemeProvider>
	);
}

export default RootProvider;
