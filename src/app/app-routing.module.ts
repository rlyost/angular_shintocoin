import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'buy',component: BuyComponent },
  { path: 'ledger',component: LedgerComponent },
  { path: 'mine',component: MineComponent },
  { path: 'sell',component: SellComponent },
  { path: 'transaction/:id',component: TransactionComponent },
  // use a colon and parameter name to include a parameter in the url
//   { path: 'gamma/:id', component: GammaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
