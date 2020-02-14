import { LightningElement, track, api } from 'lwc';

export default class LwcPlay3 extends LightningElement {
	@track trackVar = false;
	@api apiVar = 1;

	changeTrack() {
		this.trackVar = !this.trackVar;
	}
	changeApi() {
		this.apiVar++;
	}

	get checkStatus() {
		return this.trackVar ? 'Welcome' : 'Need to log in!';
	}
}
