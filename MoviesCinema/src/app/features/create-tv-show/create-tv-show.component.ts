import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-create-tv-show',
  templateUrl: './create-tv-show.component.html',
  styleUrls: ['./create-tv-show.component.css']
})
export class CreateTvShowComponent {
  @Input() isVisible: boolean = false; 
  @Input() item: any = { id: 0, name: '', favorite: false };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  // constructor(private apiservice: ApiService) { }

  onSave() {
    this.save.emit(this.item);
    // console.log(this.item);
    // this.isVisible = false; 
    this.clearItem();
  }

  onCancel() {
    this.cancel.emit();
    this.isVisible = false; 
  }
  private clearItem() {
    this.item = { id: 0, name: '', favorite: false };
  }
}
