import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CardComponent } from "../../../../shared/components/card/card.component";
import { CommonModule } from "@angular/common";

const seasons = [
  {
    season: "Spring",
    imageSrc: "/assets/png/Strawberry.png",
    imageAlt: "Strawberry",
    param: "spring",
  },
  {
    season: "Summer",
    imageSrc: "/assets/png/Starfruit.png",
    imageAlt: "Starfruit",
    param: "summer",
  },
  {
    season: "Fall",
    imageSrc: "/assets/png/Pumpkin.png",
    imageAlt: "Pumpkin",
    param: "fall",
  },
  {
    season: "Winter",
    imageSrc: "/assets/png/Powdermelon.png",
    imageAlt: "Powdermelon",
    param: "winter",
  },
];

@Component({
  selector: "star-home-page",
  imports: [CommonModule, CardComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {
  protected seasons = seasons;

  constructor() {}
}
