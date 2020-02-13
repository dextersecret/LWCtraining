import { LightningElement, track } from 'lwc';

export default class LwcPlay2 extends LightningElement {
	@track showItem = false;
	@track array = [ 'foo', 'bar', 'baz' ];

	toggleItem() {
		this.showItem = !this.showItem;
	}
}
