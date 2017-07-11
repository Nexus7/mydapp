import React from 'react';
import {Bond, TimeBond} from 'oo7';
import {Rspan, Rimg} from 'oo7-react';
import {InputBond, HashBond, BButton, TransactButton} from 'parity-reactive-ui';
import {bonds, formatBalance, isNullData} from 'oo7-parity';
import {GitHubHintABI} from 'oo7-parity';

export class App extends React.Component {
	constructor() {
		super();
		this.name = new Bond;
		this.recipient = bonds.registry.lookupAddress(this.name, 'A');
	}
	render() {
		return (
			<div>
				My balance: <Rspan>
							{bonds.balance(bonds.me).map(formatBalance)}
				</Rspan>
				<br />
				<InputBond bond={this.name} placeholder='Name of recipient' />
				<TransactButton
						content={this.name.map(n => `Give ${n} 10 Finney`)}
						disabled={this.recipient.map(isNullData)}
						tx={{
							to: this.recipient,
							value: 10 * 1e15
						}}
				/>
			</div>
		)
	}
}