import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { HttpService } from './home/http.service';
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent },
 
 { path: 'chat', component: ChatComponent }
];

