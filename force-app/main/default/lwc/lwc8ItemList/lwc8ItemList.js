import { LightningElement, track } from 'lwc';
import { useStore } from 'c/lwc8store';

export default class Lwc8ItemList extends LightningElement {
	@track items = [ 'sample' ];
	store = '';

	connectedCallback() {
		this.store = useStore();
		this.items = this.store.getStore();
	}
	updateItems() {
		this.items = this.store.getStore();
	}
}
