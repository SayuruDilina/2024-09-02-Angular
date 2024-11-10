import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductRegistrationComponent } from './pages/product-registration/product-registration.component';

export const routes: Routes = [
    {path:'',
       component:DashboardComponent 
    },
    {path:'product',
       component:ProductsComponent 
    },
    {
      path:'register',
      component:ProductRegistrationComponent
    }

];
