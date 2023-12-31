import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PaginaInicialUsuarioComponent } from './pagina-inicial-usuario/pagina-inicial-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  { path: 'Login', component: LoginComponent },
  { path: 'Cadastro', component: CadastroComponent },
  { path: 'redefinirSenha', component: RedefinirSenhaComponent },
  { path: 'Adenda', component:  AgendaComponent },
  { path: 'PgUsuario', component:  PaginaInicialUsuarioComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
