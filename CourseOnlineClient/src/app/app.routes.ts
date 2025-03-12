import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { CourseDetailsComponent } from '../components/course-details/course-details.component';
import { CourseManagementComponent } from '../components/course-management/course-management.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'register',component: RegisterComponent},
    {path:'login',component: LoginComponent},
    {path:'courses',component:CoursesComponent},
    {path:'course-details/:id',component:CourseDetailsComponent},
    {path:'courseManagement',component:CourseManagementComponent },
];
