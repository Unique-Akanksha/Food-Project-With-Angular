import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():String[]{
    const images=[
      '../../assets/images/burger-with-melted-cheese.webp',
      '../../assets/images/delicious-lobster-gourmet-seafood_23-2151713033.avif',
      '../../assets/images/c.avif',
      '../../assets/images/d.avif',
      '../../assets/images/e.avif',
      '../../assets/images/f.avif',
      '../../assets/images/g.avif',
    ]
    console.log(images);
    return images;
  }
}
