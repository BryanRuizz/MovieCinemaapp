import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesCinema';
  items = [
    { id: 1, name: 'pablo 1', favorite: true, imageUrl: 'path/to/image1.jpg' },
    { id: 2, name: 'picaso 2', favorite: false, imageUrl: 'path/to/image2.jpg' },
    { id: 3, name: 'yuya 1', favorite: true, imageUrl: 'path/to/image1.jpg' },
    { id: 4, name: 'yei 2', favorite: false, imageUrl: 'path/to/image2.jpg' },
    
    // Añade más ítems según sea necesario
  ];

  constructor() { }

  onAddClick(): void {
    console.log('Card clicked!');
  }
  card(id:number){
    console.log("card number", id);
  }

}
