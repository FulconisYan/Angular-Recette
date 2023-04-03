import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'recipe', component: RecipeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
