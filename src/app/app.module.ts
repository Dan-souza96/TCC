import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ComponentsModule } from './components/components.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';



@NgModule({
  declarations: [
    AppComponent,
    RedefinirSenhaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    TooltipModule.forRoot(),
    AppRoutingModule ,
    ComponentsModule
    // Certifique-se de importar o ComponentsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
