import React from 'react';
import {Bond, TimeBond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond} from 'parity-reactive-ui';
import {bonds, formatBalance} from 'oo7-parity';

export class App extends React.Component {
	constructor() {
		super();
		this.bond = new Bond();
		this.time = new TimeBond;
		window.bonds = bonds;
	}
	render() {
		return (
			<div>
				Current block author's balance is: &nbsp;
				<Rspan style={{fontWeight: 'bold'}}>
						{bonds.balance(bonds.head.author).map(formatBalance)}
				</Rspan>
				<br/>
				<br/>				
				Accounts available:&nbsp;
				<Rspan>
						{bonds.accounts.map(_=>_.join(', '))}
				</Rspan>
				<br/>
				<br/>
				Default account:&nbsp;
				<Rspan>{bonds.me}</Rspan>
				<br/>Given the name of&nbsp;<Rspan>{bonds.accountsInfo[bonds.me].name}</Rspan>
				<br/>With a balance of&nbsp;
				<Rspan>
						{bonds.balance(bonds.me).map(formatBalance)}
				</Rspan>
			</div>
		)
	}
}