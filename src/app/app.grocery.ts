import { Component } from '@angular/core';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';


@Component({
	selector: 'app-grocery',
	templateUrl: './app.grocery.html',
	styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
  task: string;
  tasks = [];
  faBasketShopping = faBasketShopping;

  onClick(){
  	this.tasks.push({name: this.task});
  	this.task = '';
  }

  
}