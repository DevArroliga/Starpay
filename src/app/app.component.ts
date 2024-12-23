import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FloatingCropsComponent } from "./shared/components/floating-crops/floating-crops.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, FloatingCropsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
