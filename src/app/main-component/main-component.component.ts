import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit{
 
  textWritten!: string;
  isDesktopView: boolean = window.innerWidth >= 1200;

  ngOnInit(): void {
  }
  onToolClicked(event: string) {
    this.textWritten = event;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isDesktopView = window.innerWidth >= 1200;
  }
  
}
