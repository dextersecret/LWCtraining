import { LightningElement, api } from 'lwc';

export default class Lwc3Handler extends LightningElement {
	variable = '';

	@api
	get pubVar() {
		return this.variable;
	}

	set pubVar(value) {
		value += 'abc';
		this.variable = value;
		console.log(this.variable);
	}
}
