import { LightningElement, track } from 'lwc';

export default class Lwc6app extends LightningElement {
	@track showItem = false;

	toggleItem() {
		this.showItem = !this.showItem;
	}
}
