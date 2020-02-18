import { LightningElement, track } from 'lwc';

export default class Lwc7app extends LightningElement {
	@track title = '';

	getEventData(e) {
		this.title = e.detail;
	}
}
