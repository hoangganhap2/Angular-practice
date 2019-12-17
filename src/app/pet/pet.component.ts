import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName='puppie';
  petImage='http://giadinhviet.net/wp-content/uploads/2019/01/cute-dog-shiba-inu-ryuji-japan-28-1492164409903-1492167441253-127-0-487-700-crop-1492167445920-700x405.jpg'
  constructor() { }

  updateName(name) {
    this.petName = name;
  }
  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit() {
  }

}
