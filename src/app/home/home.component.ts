import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private foodService:FoodService) { }
  Food:String[]=[];
  ngOnInit() {
    this.getFood();
  }
  getFood(){
    this.Food=this.foodService.getAll()
    console.log(this.Food);
  }

}
