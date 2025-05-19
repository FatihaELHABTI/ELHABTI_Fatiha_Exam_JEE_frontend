import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { RemboursementListComponent } from './remboursement-list/remboursement-list.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'credits/:clientId', component: CreditListComponent },
  { path: 'remboursements/:creditId', component: RemboursementListComponent },
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    CreditListComponent,
    RemboursementListComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
