import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {
  @Input() item:string | undefined
  @Output() oncancel=new EventEmitter()
  @Output() ondelete=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  cancel()
{
this.oncancel.emit()
}
delete()
{
  this.ondelete.emit(this.item)
  
}


}

