import React from 'react';
import {Bond, TimeBond} from 'oo7';
import {Rspan, Rimg} from 'oo7-react';
import {InputBond, HashBond} from 'parity-reactive-ui';
import {bonds, formatBalance} from 'oo7-parity';
import {GitHubHintABI} from 'oo7-parity';

export class App extends React.Component {
	constructor() {
		super();
		this.bond = new Bond();
		this.GithubHint = bonds.makeContract(bonds.registry.lookupAddress('gihubhint', 'A'), GitHubHintABI);
	}
	render() {
		return (
			<div>
<InputBond bond={this.bond} placeholder='Name' />
	<Rimg src={this.GithubHint.entries(bonds.registry.lookupData(this.bond, 'IMG'))[0]} />
			</div>
		)
	}
}