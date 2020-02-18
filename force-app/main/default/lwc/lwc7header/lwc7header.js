import { LightningElement, api } from 'lwc';

export default class Lwc7header extends LightningElement {
	@api value;
	mytriggerEvent() {
		this.dispatchEvent(new CustomEvent('mychange', { detail: 'abc123' }));
	}
}
