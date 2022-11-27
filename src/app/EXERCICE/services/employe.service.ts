import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../model/employe';

const URL ="http://localhost:3000/employes";
@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }

  getEmployes():Observable<Employe[]>{
    return this.http.get<Employe[]>(URL);
  }

  addEmploye(emp:Employe):Observable<Employe>{
    return this.http.post<Employe>(URL, emp);
  }

}
