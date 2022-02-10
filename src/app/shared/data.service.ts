import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API = 'https://localhost:44386/api/texttospeech/voice ';
  constructor(private http:HttpClient) { }
post(data:any):Observable<any>
{
return this.http.post<any>("https://localhost:44386/api/texttospeech/voice1",data)
/*{
  headers : new HttpHeaders({ 'Content-Type': 'application/json' })}) .pipe(map((res: any) => {
  return res;
}))*/
}
}