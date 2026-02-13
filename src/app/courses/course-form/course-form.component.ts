import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, AppMaterialModule]
})
export class CourseFormComponent {

  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }
  onSubmit() {
  }

  onCancel() {
  }

}
