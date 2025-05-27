import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roast',
  templateUrl: './roast.component.html',
  styleUrls: ['./roast.component.scss']
})
export class RoastComponent implements OnInit{

  roastText = '';
   roastingLine = {
    "level1": [
        "You're like a cloud\u2014when you disappear, it's a beautiful day.",
        "You're not stupid; you just have bad luck thinking.",
        "You're the reason the gene pool needs a lifeguard.",
        "You're like a software update\u2014always popping up at the worst time.",
        "You're not ugly, but you're definitely not what comes to mind when I hear 'wow'.",
        "You bring everyone so much joy\u2026 when you leave the room.",
        "You're like a participation trophy\u2014technically there, but no one\u2019s impressed.",
        "You're not the sharpest tool in the shed, but at least you're in the shed.",
        "You're like a Monday\u2014nobody likes you, but we all have to deal with you.",
        "You're the reason instructions have warnings.",
        "Is your name Wi-Fi? Because I'm not feeling a connection.",
        "You're so annoying, you could make a Happy Meal cry.",
        "You should really come with a warning label.",
        " Beauty is only skin deep, but ugly goes clean to the bone.",
        "You're so fake, even Barbie is jealous.",
        "Stupidity isn't a crime, so you're free to go.",
        "Calling you an idiot would be an insult to stupid people. You're much worse than that. ",
        "You're like a grey cloud. It's a beautiful day when you disappear. "
    ],
    "level2": [
        "You're like a phone with no signal\u2014completely useless most of the time.",
        "You have something on your chin\u2026 no, the third one down.",
        "Your secrets are always safe with me. I never even listen when you tell me them.",
        "You have something on your face\u2026 oh never mind, it's just your face.",
        "You're not lazy, you just rest before you get tired.",
        "You're proof that evolution can go in reverse.",
        "You're like a Wi-Fi signal\u2014strong one moment, gone the next.",
        "You're like a Netflix show\u2014started off okay, then got boring fast.",
        "You're as sharp as a marble.",
        "You're about as useful as a screen door on a submarine.",
        "Earth is full. Go somewhere else. ",     
        "You bring everyone down to your level, and then beat them with experience.",
        "You have something on your neck\u2014it's called bad decisions.",
        "You have something no one can take away from you: your irrelevance.",
        "You're not even the main character in your own story.",
        "You're like a bug in production\u2014hard to spot and even harder to fix.",
        "You're the human equivalent of a typo.",
        "You're like a password hint that says 'password'.",
        "You're the kind of person who would trip over a cordless phone.",
        "You make onions cry.",
        "You're the reason sarcasm was invented.",
        "Let me tell you. If I don't answer you the first time, what makes you think the next 25 will work?",
        "You remind me of the end pieces of a loaf of bread—nobody wants you. "
    ],
    "level3": [
        "You have something on your resume: consistent disappointment.",
        "You're a walking argument against natural selection.",
        "You must have been born on a highway because that\u2019s where most accidents happen.",
        "You're not just a waste of space, you're a biohazard.",
        "You're the kind of person who makes others reconsider free speech.",
        "You're like a software bug\u2014persistent, annoying, and no one can figure out why you exist.",
        "You're the glitch in the human matrix.",
        "You're what happens when potential is wasted with precision.",
        "You're not even interesting enough to be disliked properly.",
        "You're a full-time clown, just missing the paycheck.",
        "I look at you and think, Two billion years of evolution, for this?",
        "I am jealous of all the people that have never met you. ",
        "I consider you my sun. Now please get 93 million miles away from here",
        "If laughter is the best medicine, your face must be curing the world.",
        "I was thinking about you today. It reminded me to take out the trash.",
        "I love what you've done with your hair. How'd you get it to come out of your nose like that?",
        "Mirrors can't talk. Lucky for you, they can't laugh either.",
        "When you were born, the doctors probably threw you out of the window, but the window threw you back.",
        "If you're going to be two-faced, at least make one of them pretty. ",
        "I'd smack you, but I'm against animal abuse. ",
        "You are like a software update. Every time I see you, I immediately think, Not now.",
        "It's sad what happened to your face. Oh wait, that's how it's always looked?",
        "Do your parents realize they're living proof that two wrongs don't make a right?"


    ]
}


ngOnInit(): void {
this.roastText =  (this.roastingLine.level1[Math.floor(Math.random() * this.roastingLine.level1.length)]);
}
roastHarder() {
    this.roastText = (this.roastingLine.level3[Math.floor(Math.random() * this.roastingLine.level3.length)])
}
}
