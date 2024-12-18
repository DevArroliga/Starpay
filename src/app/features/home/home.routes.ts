import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home-page/home-page.component").then(
        (m) => m.HomePageComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];
