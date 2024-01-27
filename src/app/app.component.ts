import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'aTechnology';

  constructor (private _TranslateService:TranslateService){}

  // this function is for translating the whole project from en to ar and from ar to en
  translate(event:any){
    this._TranslateService.use(event.target.value)
    console.log(this._TranslateService.use(event.target.value))
  }


  ngOnInit():void{
  }

  // this function is for coping the text near the icon when click on it
  copyText(){
    const textToCopy:any = document.getElementById('textToCopy') as HTMLDivElement;
    navigator.clipboard.writeText(textToCopy?.textContent)
    .then(() => {
      alert('Text copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}
