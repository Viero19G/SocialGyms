import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabPerfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'tabTreino',
        loadChildren: () => import('../treino/treino.module').then(m => m.TreinoPageModule)
      },
      {
        path: 'tabMetas',
        loadChildren: () => import('../metas/metas.module').then(m => m.MetasPageModule)
      },
      {
        path: 'tabTarefas',
        loadChildren: () => import('../tarefas/tarefas.module').then(m => m.TarefasPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home-routing.module').then( m => m.HomePageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
