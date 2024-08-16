import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-update-tv-show',
  templateUrl: './update-tv-show.component.html',
  styleUrls: ['./update-tv-show.component.css']
})
export class UpdateTvShowComponent {
  @Input() isVisible: boolean = false; 
  @Input() item: any = { id: 0, name: '', favorite: false }; 
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    this.save.emit(this.item); 
    this.isVisible = false; 
  }

  onCancel() {
    this.cancel.emit(); 
    this.isVisible = false; 
  }

}
