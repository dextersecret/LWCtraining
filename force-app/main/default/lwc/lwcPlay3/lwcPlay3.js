import { LightningElement, track } from 'lwc';

export default class LwcPlay3 extends LightningElement {
	@track trackVar = false;

	changeTrack() {
		this.trackVar = !this.trackVar;
	}

	get checkStatus() {
		return this.trackVar ? 'Welcome' : 'Need to log in!';
	}
}
