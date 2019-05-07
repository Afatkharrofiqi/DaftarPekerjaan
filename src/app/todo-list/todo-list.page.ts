import { Component, OnInit } from '@angular/core';
import { NavController, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  tasks:Array<any> = [];
  constructor(public navCtrl: NavController) { 
    this.tasks = [
      {title:'Membeli Sayur Ke Pasar', status:'open'},
      {title:'Memasak Makan Malam', status:'open'},
      {title:'Membuat Sarapan', status:'open'},
      {title:'Meeting siang jam 13:00', status:'open'},
    ];
  }

  addItem(){
    console.log('tambah data');
    let theNewTask: string = prompt('Tambah Pekerjaan');
    if(theNewTask !== ''){
      console.log('added');
      this.tasks.push({title: theNewTask, status: 'open'});
    }
  }

  markAsDone(slidingItem: IonItemSliding, task: any){
    console.log('mask as done');
    task.status = 'done';
    slidingItem.close();
  }

  removeTask(slidingItem: IonItemSliding, task: any){
    console.log('remove task')
    task.status = 'removed';
    let index = this.tasks.indexOf(task);
    if(index > -1){
      this.tasks.splice(index, 1);
    }
    slidingItem.close();
  }

  goTo(url){

  }

  ngOnInit() {
  }

}
