import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Intern } from './interns/interns';
import { Tasks } from './tasks/tasks';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'interns', component: Intern },
  { path: 'tasks', component: Tasks }
];