import { LightningElement, api } from 'lwc';

export default class Lwc6ListItem extends LightningElement {
	@api item = '';

	connectedCallback() {
		console.log('connected');
	}
	renderedCallback() {
		console.log('rendered');
	}
	disconnectedCallback() {
		console.log('disconnected');
	}
}
