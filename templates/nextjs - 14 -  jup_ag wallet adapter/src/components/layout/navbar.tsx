import React from 'react'
import { ModeToggle } from '../theme-switch'
import ConnectButton from '../connect-button';
function Navbar() {
  return (
		<div>
			<ModeToggle />
			<ConnectButton />
		</div>
	);
}

export default Navbar
