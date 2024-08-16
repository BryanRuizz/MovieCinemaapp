import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesCinema';

  Idd: number = 0;
  ban: boolean = true;

  data:any[]=[];

  items = [
    { id: 1, name: 'pablo 1', favorite: true, imageUrl: 'path/to/image1.jpg' },
    { id: 2, name: 'picaso 2', favorite: false, imageUrl: 'path/to/image2.jpg' },
    { id: 3, name: 'yuya 1', favorite: true, imageUrl: 'path/to/image1.jpg' },
    { id: 4, name: 'yei 2', favorite: false, imageUrl: 'path/to/image2.jpg' },

    // Añade más ítems según sea necesario
  ];

  constructor(private apiservice: ApiService) { }

  ngOnInit():void{
    this.llenarData();
  }
  llenarData(){
    this.apiservice.getdata().subscribe(data =>{
      this.data = data;
      console.log("data",this.data);
    })
  }

  onAddClick(): void {
    console.log('Card clicked!');
  }
  card(id: number) {
    console.log("look", id, this.Idd, this.ban);
    if (id === this.Idd) {
      this.Idd = 0;
    } else {
      this.Idd = id;
    }
  }

  deleteitem(id:number){
    console.log("deleted item",id );
  }

  


}
