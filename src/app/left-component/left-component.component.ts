import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

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

  stringCalculation() {
    this.myHashMap = {};
    const x = this.textWritten?.split(/[.\-_, ]/);
    console.log('fd', x);
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
    console.log(this.hashMapEntries)
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
    else { 
      this.textWritten = this.textWritten.split(' ').map((val: string)=>{
        return val[0].toUpperCase() + val.substring(1).toLowerCase();
      }).join(' ');
    }
     this.onToolClicked.emit(this.textWritten);
  }
}
