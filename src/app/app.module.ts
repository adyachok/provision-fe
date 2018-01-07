import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {LoginDialogComponent} from './login/login-dialog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    LoginComponent,
    NavigationComponent,
    ProjectsComponent,
  ],
  entryComponents: [
    LoginDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
