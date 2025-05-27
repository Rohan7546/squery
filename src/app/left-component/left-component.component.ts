import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.scss'],
})
export class LeftComponentComponent implements OnChanges {
  @Input()
  textWritten = '';

  @Output()
  onToolClicked = new EventEmitter<string>();

  word!: string;
  wordPercentage = 0;
  wordCount = 0;
  myHashMap: { [key: string]: number } = {};
  hashMapEntries: any;
  replaceFrom!: string;
  replaceTo!: string;
charLength = 0;
  constructor(private router: Router){}

  stringCalculation() {
    this.myHashMap = {};
    const x = this.textWritten?.split(/[.\-_, ]/);
    let len = x?.length;
    for (let i = 0; i < len; i++) {
      if (x[i].length) {
        if (this.myHashMap[x[i]]) {
          this.myHashMap[x[i]] = 1 + this.myHashMap[x[i]];
        } else {
          this.myHashMap[x[i]] = 1;
        }
      }
    }
    this.hashMapEntries = Object.entries(this.myHashMap);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['textWritten']) {
      this.stringCalculation();
    }
  }

  onClick(method: string) {
    if(method==='uppercase') {
      this.textWritten = this.textWritten.toUpperCase();
      
    }
    else if(method==='lowercase') {
      this.textWritten = this.textWritten.toLowerCase();
    }
    else if(method==='replace') {
      if(this.replaceFrom && this.replaceTo)
      this.textWritten = this.textWritten.replaceAll(this.replaceFrom, this.replaceTo);
    }
    else if(method=='roast') {
      this.router.navigate(['/roast']);
    }
    else if(method =='generate') {
      this.textWritten = this.getCharofLen(this.charLength);
    }
    else if(method==='game') {
      this.router.navigate(['/hangman'])
    }
    else { 
      this.textWritten = this.textWritten.split(' ').map((val: string)=>{
        return val[0].toUpperCase() + val.substring(1).toLowerCase();
      }).join(' ');
    }
     this.onToolClicked.emit(this.textWritten);
  }

   getCharofLen(length: number) {
    let result   = '';
    let characters   = 'ABC DEF GHI JKLMN OPQR STUV WXYZabc defg hijk lmn opqr stuv wx yz ';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
}
