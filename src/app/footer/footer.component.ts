import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input()
  textWritten='';

  characterCount = 0;
  wordCount = 0;
  sentencesCount = 0;
  spacesCount = 0;

  ngOnInit(): void {
    this.allStringCalculations()
  }

  allStringCalculations() {
    if(this.textWritten) {
      this.wordCount = this.textWritten.match(/(\w+)/g)?.length!;
      this.characterCount = this.textWritten.length;
      this.sentencesCount = this.textWritten.split('.').length - 1;
      this.spacesCount = this.textWritten.split(' ').length - 1;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['textWritten']) {
        this.allStringCalculations()
      }
  }
}
