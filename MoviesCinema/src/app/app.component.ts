import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TVshows';
  Idd: number = 0;
  ban: boolean = true;
  modalupdate = false;
  modalcreate = false;
  data: any[] = [];
  filteredData: any[] = [];
  currentItem: any = { id: 0, name: '', favorite: false };
  searchTerm: string = ''; 

  constructor(private apiservice: ApiService) { }
// End thshows

  ngOnInit(): void {
    this.getdata();//at starting app
  }

  //Get all data from api end tvShows
  getdata() {
    this.apiservice.getdata().subscribe(data => {
      this.data = data;
      this.filteredData = data; 
      this.filterItems(); 
    });
  }

  // hanlde selected item
  card(id: number) {
    if (id === this.Idd) {
      this.Idd = 0;
    } else {
      this.Idd = id;
    }
  }

  deleteitem(id: number) {
    this.apiservice.deleteData(id).subscribe(response => {
      // console.log("Item deleted successfully", response);
      this.getdata(); 
    }, error => {
      console.error("Error deleting item", error);
    });
  }

  // hanlde view model updated 
  updateview(listen: boolean) {
    this.currentItem = this.data.filter((inf) => inf.id === this.Idd);
    // console.log(this.currentItem);
    this.modalupdate = listen;

  }

  // hanlde view create modal
  createtvshow(listen: boolean) {
    this.modalcreate = listen;
  }


  handlecreate(item: any) {
    this.apiservice.createData(item).subscribe(response => {
      // console.log("Item created successfully", response);
      this.getdata(); 
    }, error => {
      alert("Verify Endpoint");
      console.error("Error creating item", error);
    });
    this.modalcreate = false; 
  }

  handleupdate(item: any) {
    this.apiservice.updateData(this.Idd, item[0]).subscribe(response => {
      // console.log("Item updated successfully", response);

      this.getdata();
    }, error => {
      console.error("Error updating item", error);
    });
    this.modalcreate = false; 
    this.getdata();
  }

  // start-> hanlde view update and create just for show or hide
  updatecancel() {
    this.modalupdate = false;
  }

  createcancel() {
    this.modalcreate = false;
  }
//end  

  filterItems() {
    if (this.searchTerm) {
      this.filteredData = this.data.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredData = this.data; 
    }
  }
}
