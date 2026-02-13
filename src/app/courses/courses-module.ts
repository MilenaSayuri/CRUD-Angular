import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing-module';
import { Courses } from './courses/courses';
import { AppMaterialModule } from '../shared/components/app-material/app-material-module';
import { SharedModule } from '../shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    Courses,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    CourseFormComponent
  ]
})
export class CoursesModule { }
