import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control: FormControl): { [s: string]: boolean } {
	if (!control.value.match(/^123/)) {
		return { invalidSku: true };
	}
}

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

		this.sku.valueChanges.subscribe(
			(value: string) => {
				console.log('sku changed to:', value);
			}
		)

		this.myForm.valueChanges.subscribe(
			(form: any) => {
				console.log('form changed to:', form);
			}
		)
	}

	onSubmit(value: string): void {
		console.log('you submitted value:', value);
	}
}
