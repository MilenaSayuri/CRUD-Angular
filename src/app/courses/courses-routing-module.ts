import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Courses } from './containers/courses/courses';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CourseResolver } from './guards/course-resolver';

const routes: Routes = [
  {
    path: '', component: Courses
  },
  {
    path: 'new', component: CourseFormComponent, resolve: { course: CourseResolver }
  },
  {
    path: 'edit/:id', component: CourseFormComponent, resolve: { course: CourseResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
