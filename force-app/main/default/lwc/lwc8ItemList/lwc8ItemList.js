// https://www.youtube.com/watch?v=rzdMEiNhMNc&feature=emb_title
import { LightningElement, track } from 'lwc';
import { useStore } from 'c/lwc8store';

export default class Lwc8ItemList extends LightningElement {
	@track items = [ 'sample' ];
	store = '';

	connectedCallback() {
		this.store = useStore();
		this.items = this.store.getStore();
		this.store.subscribe(this.updateItems.bind(this));
	}

	disconnectedCallback() {
		this.store.unsubscribe(this.updateItems.bind(this));
	}

	updateItems() {
		this.items = this.store.getStore();
	}

	unsub() {
		this.store.unsubscribe(this.updateItems.bind(this));
	}
}
