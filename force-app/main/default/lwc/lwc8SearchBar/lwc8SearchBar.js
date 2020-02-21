import { LightningElement } from 'lwc';
import { useStore } from 'c/lwc8store';

export default class Lwc8SearchBar extends LightningElement {
	store = '';
	searchItems = [];

	connectedCallback() {
		this.store = useStore();
		this.searchItems = this.store.getStore();
	}

	onChange(e) {
		console.log(e.target.value);
		//local variable filtered out of local copy (searchItems) of remote store
		let newItems = this.searchItems.filter((item) => {
			return item.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1;
		});
		this.store.setStore(newItems);
	}
}
