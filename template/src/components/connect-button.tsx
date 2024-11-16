"use client";

import { UnifiedWalletButton, useWallet } from "@jup-ag/wallet-adapter";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function ConnectButton() {
	const formatAddress = (address: string): string => {
		return `${address.slice(0, 4)}…${address.slice(
			address.length - 4,
			address.length,
		)}`;
	};

	const { connected, disconnect, publicKey } = useWallet();

	if (connected) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="h-10">
						{formatAddress(publicKey?.toBase58() || "")}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-48">
					<DropdownMenuLabel>
						{formatAddress(publicKey?.toBase58() || "")}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={disconnect} className="cursor-pointer">
						Disconnect
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<UnifiedWalletButton
			currentUserClassName="!focus:outline-none !hover:bg-primary/90 !focus:ring-4 !px-5 !py-3 !text-lg font-normal border !border-opacity-[12%] !h-10 !rounded-md"
			buttonClassName="text-primary-foreground bg-primary hover:bg-primary/90 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
		/>
	);
}
