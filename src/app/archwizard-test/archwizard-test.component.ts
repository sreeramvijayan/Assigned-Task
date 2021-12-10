import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-archwizard-test',
  templateUrl: './archwizard-test.component.html',
  styleUrls: ['./archwizard-test.component.css']
})
export class ArchwizardTestComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
name = 'Angular';
 constructor(private formBuilder: FormBuilder) { }
   ngOnInit(): void{
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
        });
   }
   
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
}
