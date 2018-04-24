import { Component, OnInit } from '@angular/core';
//Service
import { TeacherService } from "../../../servicios/teacher.service";
import { ToastrService } from 'ngx-toastr';
//class Teacher
import { Teacher } from "../../../models/teacher";
import { element } from 'protractor';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  teacherList: Teacher[];

  constructor(
    private teacherService: TeacherService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.teacherService.getTeachers()
      .snapshotChanges()
      .subscribe(item => {
        this.teacherList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.teacherList.push(x as Teacher);
        });
      });
  }

  onEdit(teacher: Teacher) {
    this.teacherService.selectedTeacher = Object.assign({}, teacher);
  }

  onDelete($key: string) {
    if (confirm('Desea eliminar este(a) Docente?')) {
      this.teacherService.deleteTeacher($key);
      this.toastr.success('Operación exitosa!', 'Profesor Eliminado.');
    }

  }
}
