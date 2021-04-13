import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreService } from "../core.service";

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.css']
})
export class ThingsToDoComponent implements OnInit {
  form: FormGroup;
  modalRef: BsModalRef;

  thingsToDo: any[] = [];
  currentToDo: any = {id: null, title: '', status:'', description: '', date: new Date()};
  modalCallback: (() => void);

  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private server: CoreService) { }


    ngOnInit() {
      this.form = this.fb.group({
        title: [this.currentToDo.title, Validators.required],
        status: this.currentToDo.status,
        description: this.currentToDo.description,
        date: [this.currentToDo.date, Validators.required],
      });
      this.getThingsToDo();
    }
  
    private updateForm() {
      this.form.setValue({
        title: this.currentToDo.title,
        status: this.currentToDo.status,
        description: this.currentToDo.description,
        date: new Date(this.currentToDo.date)
      });
    }
  
    private getThingsToDo() {
      this.server.getThingsToDo().then((response: any) => {
        console.log('Response', response);
        this.thingsToDo = response.map((ev) => {
          ev.body = ev.description;
          ev.header = ev.title;
          ev.icon = 'fa-clock-o';
          return ev;
        });
      });
    }
  
    addToDo(template) {
      this.currentToDo = {id: null, title: '', status: '', description: '', date: new Date()};
      this.updateForm();
      this.modalCallback = this.createToDo.bind(this);
      this.modalRef = this.modalService.show(template);
    }
  
    createToDo() {
      const newToDo = {
        title: this.form.get('title').value,
        status: this.form.get('status').value,
        description: this.form.get('description').value,
        date: this.form.get('date').value,
      };
      this.modalRef.hide();
      this.server.createThingsToDo(newToDo).then(() => {
        this.getThingsToDo();
      });
    }
  
    editToDo(index, template) {
      this.currentToDo = this.thingsToDo[index];
      this.updateForm();
      this.modalCallback = this.updateToDo.bind(this);
      this.modalRef = this.modalService.show(template);
    }
  
    updateToDo() {
      const toDoData = {
        id: this.currentToDo.id,
        title: this.form.get('title').value,
        status: this.form.get('status').value,
        description: this.form.get('description').value,
        date: this.form.get('date').value,
      };
      this.modalRef.hide();
      this.server.updateThingsToDo(toDoData).then(() => {
        this.getThingsToDo();
      });
    }
  
    deleteToDo(index) {
      this.server.deleteThingsToDo(this.thingsToDo[index]).then(() => {
        this.getThingsToDo();
      });
    }
  
    onCancel() {
      this.modalRef.hide();
    }

}
