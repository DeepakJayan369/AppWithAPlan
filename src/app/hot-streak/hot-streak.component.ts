import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreService } from "../core.service";

@Component({
  selector: 'app-hot-streak',
  templateUrl: './hot-streak.component.html',
  styleUrls: ['./hot-streak.component.css']
})
export class HotStreakComponent implements OnInit {
  form: FormGroup;
  modalRef: BsModalRef;

  streaks: any[] = [];
  currentStreak: any = {id: null, name: '', description: '', status:'', streak:'',
  last_done: new Date(), started: new Date(), missed:'',	total_missed:'', category:''};
  modalCallback: (() => void);

  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private server: CoreService) { }

    ngOnInit() {
      this.form = this.fb.group({
        name: [this.currentStreak.title, Validators.required],
        description: this.currentStreak.description,
        status: this.currentStreak.status,
        streak: this.currentStreak.streak,
        last_done: [this.currentStreak.last_done, Validators.required],
        started: [this.currentStreak.started, Validators.required],
        missed: this.currentStreak.missed,
        total_missed: this.currentStreak.total_missed,
        category: this.currentStreak.category,
      });
      this.getStreaks();
    }

  private getStreaks() {
    this.server.getStreaks().then((response: any) => {
      console.log('Response', response);
      this.streaks = response.map((ev) => {
        ev.body = ev.description;
        ev.header = ev.title;
        ev.icon = 'fa-clock-o';
        return ev;
      });
    });
  }

  
  private updateForm() {
    this.form.setValue({
      name: this.currentStreak.name,
      description: this.currentStreak.description,
      status: this.currentStreak.status,
      streak: this.currentStreak.streak,
      last_done:  new Date(this.currentStreak.last_done), 
      started: new Date(this.currentStreak.started),
      missed: this.currentStreak.missed,
      total_missed: this.currentStreak.total_missed,
      category: this.currentStreak.category,
    });
  }

  addToDo(template) {
    this.currentStreak = {id: null, name: '', description: '', status:'', streak:'',
    last_done: new Date(), started: new Date(), missed:'',	total_missed:'', category:''};
    this.updateForm();
    this.modalCallback = this.createStreak.bind(this);
    this.modalRef = this.modalService.show(template);
  }

  createStreak() {
    const newToDo = {      
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      status: this.form.get('status').value,
      streak: this.form.get('streak').value,
      last_done:  this.form.get('last_done').value, 
      started: this.form.get('started').value,
      missed: this.form.get('missed').value,
      total_missed: this.form.get('total_missed').value,
      category: this.form.get('category').value,
    };
    this.modalRef.hide();
    this.server.createStreak(newToDo).then(() => {
      this.getStreaks();
    });
  }

  editToDo(index, template) {
    this.currentStreak = this.streaks[index];
    this.updateForm();
    this.modalCallback = this.updateStreak.bind(this);
    this.modalRef = this.modalService.show(template);
  }

  updateStreak() {
    const toDoData = {
      id: this.currentStreak.id,
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      status: this.form.get('status').value,
      streak: this.form.get('streak').value,
      last_done:  this.form.get('last_done').value, 
      started: this.form.get('started').value,
      missed: this.form.get('missed').value,
      total_missed: this.form.get('total_missed').value,
      category: this.form.get('category').value,
    };
    this.modalRef.hide();
    this.server.updateStreak(toDoData).then(() => {
      this.getStreaks();
    });
  }

  deleteToDo(index) {
    this.server.deleteStreak(this.streaks[index]).then(() => {
      this.getStreaks();
    });
  }

  onCancel() {
    this.modalRef.hide();
  }
}
