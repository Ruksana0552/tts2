import { Component, OnInit,ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

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
selectedVoice:any;
selectedLanguage:any;

formgroup:FormGroup
  constructor(private service:DataService,private formBuilder: FormBuilder,private http:HttpClient) { 
    this.formgroup=this.formBuilder.group({
      text1:['']

    });
    
  }
@ViewChild("sample")text:ElementRef;

@ViewChild("audio")audiofile:ElementRef;


ngAfterViewInit()
{
  
}
  ngOnInit(): void {

  }
  synthesisvoice(voice)
  {
 this.textobj.synthesisvoicename=voice
  }

  speak()
  {
   let audio=new Audio();
  
    //formdata.append('texttospeak',this.formgroup.value.text1)
   
    //this.textobj.texttospeak=this.formgroup.value.text1
    const formdata=new FormData()
    formdata.append('texttospeak',this.text.nativeElement.innerText)
    formdata.append('synthesisvoicename',this.selectedVoice)
    formdata.append('synthesisLanguageName',this.selectedLanguage)
    this.service.post(formdata).subscribe(
     res=>{})
  // audio.src="C:/Users/ruksana.khanum/Desktop/text to speech/text_to_speech/src/assets/speech/file.wav"
 /* audio.src="C:/Users/ruksana.khanum/Desktop/dummy app/file1.mp3"
  audio.load();
   audio.play().then(() => {
   
  })
  .catch(error => {
    console.log(error);
  });*/

  //var url="C:/Users/ruksana.khanum/Desktop/dummy app/file.wav";
  //window.open(url,null)
  }
  
 
}
