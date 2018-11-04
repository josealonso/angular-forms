import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-demo-form-sku',
	templateUrl: './demo-form-sku.component.html',
	styleUrls: [ './demo-form-sku.component.css' ]
})
export class DemoFormSkuComponent {
	myForm: FormGroup;
	sku: AbstractControl;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			sku: [ '', Validators.required ]
		});

		this.sku = this.myForm.controls['sku'];
	}

	onsubmit(value: string): void {
		console.log('you submitted value:', value);
	}
}
