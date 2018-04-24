import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Teacher } from '../models/teacher';

@Injectable()
export class TeacherService {
  teacherList: AngularFireList<any>;
  selectedTeacher: Teacher = new Teacher();

  constructor(
    private firebase: AngularFireDatabase
  ) { }

  //Definimos metodos
  getTeachers(){
    return this.teacherList = this.firebase.list('teachers');
  }

  insertTeachers(teacher: Teacher){
    this.teacherList.push({
      run: teacher.run,      
      names: teacher.names,
      paterno: teacher.paterno,
      materno: teacher.materno,
      address: teacher.address,
      fono: teacher.fono,
      email: teacher.email
    });
  }

  updateTeacher(teacher: Teacher){
    this.teacherList.update(teacher.$key,{
      run: teacher.run,      
      names: teacher.names,
      paterno: teacher.paterno,
      materno: teacher.materno,
      address: teacher.address,
      fono: teacher.fono,
      email: teacher.email
    });
  }

  deleteTeacher($key: string){
    this.teacherList.remove($key);
  }
}
