import { AppMaterialModule } from '../../../shared/components/app-material/app-material-module';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, AppMaterialModule]
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly service: CoursesService,
    private readonly snackBar: MatSnackBar,
    private readonly location: Location,
    private readonly route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      _id: [''],
      name: [''],
      category: ['']
    });
  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (result) => this.onSuccess(), error: (error) => this.onError()
    });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', 'Fechar', { duration: 3000 });
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso.', 'Fechar', { duration: 3000 });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }
}
