import { useAppKit } from "@reown/appkit/react";
import { Button } from "./ui/button";

export default function ConnectButton() {
	// 4. Use modal hook
	const { open } = useAppKit();

	return (
		<>
			<Button onClick={() => open()}>Open Connect Modal</Button>
			<Button variant="outline" onClick={() => open({ view: "Networks" })}>
				Open Network Modal
			</Button>
		</>
	);
}
