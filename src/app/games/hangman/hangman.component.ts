import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  keyWords = [['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L'],['Z','X','C','V','B','N','M']];
  hangmanWords = [
    "astronaut", "galaxy", "nebula", "planet", "orbit", "telescope",
    "comet", "gravity", "satellite", "meteor", "launch", "cosmos",
    "universe", "spaceship", "alien", "rocket", "mission", "asteroid",
    "blackhole", "starlight", "lunar", "solstice", "eclipse", "quasar",
    "supernova", "observatory",
    "developer", "frontend", "backend", "angular", "typescript", "component",
    "function", "variable", "framework", "debugger", "compiler", "syntax",
    "iteration", "recursion", "algorithm", "array", "object", "database",
    "network", "protocol", "software", "hardware",
    "mystery", "adventure", "harmony", "inspire", "journey", "fantasy",
    "velocity", "puzzle", "strategy", "explorer", "challenge"
  ];
  randomWordLength = 0;
  showWord: string[] = [];
  word : string[] = [];
  totalChances = 6;
  hangManWon = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.generateRandomWord();
  }

  generateRandomWord() {
    this.word = (this.hangmanWords[Math.floor(Math.random() * this.hangmanWords.length)]).split('');
    if(this.word.length > 7 && window.innerWidth <601) {
      this.generateRandomWord();
    }
    this.randomWordLength = this.word.length;
    this.showWord = '-'.repeat(this.randomWordLength).split('');
    
  }

  onKeyPress(s: string) {
    const index = this.word.indexOf(s.toLowerCase());
    
    if (index > -1 ) {
    this.showWord[index]=s;
    this.word[index]='-';
    }
    else {
      this.totalChances -=1;
      this.totalChances = Math.max(this.totalChances, 0);
    }

    if(this.showWord.indexOf('-') == -1) {
      this.hangManWon = true;
    }
  }
  
  reload() {
    this.randomWordLength = 0;
    this.showWord = [];
    this.word = [];
    this.totalChances = 6;
    this.hangManWon = false;
    this.generateRandomWord()

  }

  goBack() {
    this.router.navigate(['']);
  }
}
