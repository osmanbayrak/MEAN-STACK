import { RouterModule } from '@angular/router';
import { AddstudentComponent } from './components/students/addstudent.component';
import { StudentsComponent } from './components/students/students.component';
var router = [
    { path: '', redirectTo: '/allStudent', pathMatch: 'full' },
    { path: 'allStudent', component: StudentsComponent },
    { path: 'addStudent', component: AddstudentComponent }
];
export var routing = RouterModule.forRoot(router);
//# sourceMappingURL=C:/Users/osman/Desktop/Projects/meanauthapp-master/angular-src/src/app/app.routing.js.map