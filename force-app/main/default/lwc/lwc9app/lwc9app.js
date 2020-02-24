import { LightningElement, track } from 'lwc';
import getFruits from '@salesforce/apex/lwc9ApexClass.getFruits';
export default class Lwc9app extends LightningElement {
	@track fruits = [];

	connectedCallback() {
		console.log('connect');
		getFruits()
			.then((res) => {
				this.fruits = res;
				console.log('gotfruits');
			})
			.catch((err) => console.log(err));
	}
}
