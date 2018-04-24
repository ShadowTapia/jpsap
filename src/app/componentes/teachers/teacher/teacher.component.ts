import { Component, OnInit } from '@angular/core';

//Servicios
import { TeacherService } from '../../../servicios/teacher.service';
import { NgForm } from '@angular/forms';
import { Teacher } from '../../../models/teacher';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  isValidFormSubmitted = false;
  validateEmail = true;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //Se establece una mascara para el run profesor.
  mask: any[] = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /[a-zA-Z0-9]/];
  constructor(
    private teacherService: TeacherService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.teacherService.getTeachers();
    this.resetForm();
  }

  onSubmit(teacherForm: NgForm){
    this.isValidFormSubmitted=false;
    if (teacherForm.invalid){
      return;
    }
    this.isValidFormSubmitted=true;
    if (teacherForm.value.$key == null)
      this.teacherService.insertTeachers(teacherForm.value),
      this.toastr.success('Operación exitosa!','Docente agregado con exito');
    else
      this.teacherService.updateTeacher(teacherForm.value),
      this.toastr.success('Operación exitosa!','Docente Actualizado con exito');
   
    this.resetForm(teacherForm);    
  }

  resetForm(teacherForm?: NgForm) {
    if (teacherForm != null) {
      teacherForm.reset();
      this.teacherService.selectedTeacher = new Teacher();
    }
  }
}
