import { LightningElement } from 'lwc';
import { validateLength } from 'c/lwc4ExportFunction';

export default class lwc4app extends LightningElement {
	onChange(e) {
		if (validateLength(e.target.value)) {
			console.log('Passed!');
		} else {
			console.log('value must be at least 8 chars long!');
		}
	}
}
