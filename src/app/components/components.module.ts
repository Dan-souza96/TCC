import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { AgendaComponent } from './agenda/agenda.component';

registerLocaleData(localePt);

@NgModule({  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  declarations: [
    LoginComponent,
    CadastroComponent,
    RedefinirSenhaComponent,
    AgendaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    ComponentsRoutingModule,
    MatSelectModule ,
    MatIconModule,
    TooltipModule.forRoot()
  ]
})
export class ComponentsModule { }
