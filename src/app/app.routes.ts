import { Route, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "auth",
        loadComponent:
            () => import("./pages/auth/auth.component").then(
                (c) => c.AuthComponent
            )
    },
    {
        path: "dashboard",
        loadComponent:
            () => import("./pages/dashboard/dashboard.component").then(
                (c) => c.DashboardComponent
            )

    },
    {
        path: "**",
        loadComponent:
            () => import("./pages/notfound/notfound.component").then(
                (c) => c.NotfoundComponent
            )
    },
];