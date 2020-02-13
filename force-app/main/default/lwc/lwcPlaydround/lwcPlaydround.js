import { LightningElement, track, api } from 'lwc';

export default class LwcPlaydround extends LightningElement {
	simpleVar = 'simple variable';
	@track trackVar = 'track variable';
	@api apiVar = 'api variable';

	changeSimple() {
		this.simpleVar = 'new simple Var';
		console.log(this.simpleVar);
	}
	changeTrack() {
		this.trackVar = 'new track var';
		console.log(this.trackVar);
	}
	changeApi() {
		this.apiVar = 'new api var';
		console.log(this.apiVar);
	}
}
