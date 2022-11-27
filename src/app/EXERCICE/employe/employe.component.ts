import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employe } from '../model/employe';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  lesEmployes!:Employe[];
  employeForm!:FormGroup;
  constructor(private employeService:EmployeService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeService.getEmployes().subscribe(
      data => this.lesEmployes = data
    )
    this.createForm();
  }

  createForm(){
    this.employeForm = this.fb.nonNullable.group({
      matricule:[0,[Validators.required,Validators.pattern('^[1-9]{3}[0-9]*$')]],
      nom:['',[Validators.required, Validators.pattern('^[A-Z][a-z]+( [A-Z][a-z]+)+$')]],
      dateEmbauche: ["2022-11-27"],
      diplomes:this.fb.array([])
    })
  }

  get matricule(){
    return this.employeForm.get('matricule');
  }

  get nom(){
    return this.employeForm.get('nom');
  }

  get lesDiplomes(){
    return this.employeForm.get('diplomes') as FormArray;
  }

  ajouterDiplome(){
    this.lesDiplomes.push(this.fb.group({
      nomDiplome:['',[Validators.required, Validators.minLength(3)] ],
      annee:[2022, [Validators.min(1960), Validators.max(2022)]]
    }))
  }

  // get nomDiplome(i:number){
  //   return 
  // }

  isDiplomNameValid(i:number){
      let dip = this.lesDiplomes.controls[i].get('nomDiplome');
      return dip?.invalid && dip?.touched;
  }

  isYearValid(i:number){
    let an =  this.lesDiplomes.controls[i].get('annee');
    return an?.invalid && an?.touched;
  }

  ajouterEmploye(){
    this.employeService.addEmploye(this.employeForm.value).subscribe(
      employe=> this.lesEmployes.push(employe)
    )
  }

  onVider(){
    this.employeForm.reset();
    this.lesDiplomes.clear();
  }

}
