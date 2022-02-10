import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { fileURLToPath } from 'url';
import { DataService } from '../shared/data.service';
import {  FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { text} from './text';
import { HttpClient } from '@angular/common/http';
//import {Text} from './TextToSpeak'
@Component({
  selector: 'app-tts',
  templateUrl: './tts.component.html',
  styleUrls: ['./tts.component.css']
})
export class TtsComponent implements OnInit {
textobj:text=new text();
formgroup:FormGroup
  constructor(private service:DataService,private formBuilder: FormBuilder,private http:HttpClient) { 
    this.formgroup=this.formBuilder.group({
      text1:['']

    });
   
  }

  ngOnInit(): void {

  }
  speak()
  {
    let audio=new Audio();
    const formdata=new FormData()
    formdata.append('texttospeak',this.formgroup.value.text1)
    this.textobj.texttospeak=this.formgroup.value.text1
   return this.service.post(formdata).subscribe(
     res=>{}
   )
    audio.src="C:/Users/ruksana.khanum/Desktop/dummy app/file.wav"
    audio.load();
    audio.play();
  }

}
