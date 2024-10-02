import { Component } from '@angular/core';

@Component({
  selector: 'app-lj',
  templateUrl: './lj.page.html',
  styleUrls: ['./lj.page.scss'],
})
export class LjPage {
  lj: {
    name: string;
    text: string;
  };
  chapters: {
    name: string;
    text: string;
  }[] = [];

  constructor() {
    this.buildChapters();
  }

  buildChapters(): void {
    /*
      Synopsis:
      James' Step-Mother teaches him the ins and outs of intimacy with practical demonstrations.
    */
    this.chapters.push({
      name: 'A Lesson In Intimacy With My Step-Mom',
      text: `
        
      `.replace(/(?:\r\n|\r|\n)/g, '<br>')
    });
    /*
      Synopsis:
      James' Step-Sister awakens to an intense attraction to him.
    */
    this.chapters.push({
      name: 'My Step-Sister Returns From College',
      text: `
        
      `.replace(/(?:\r\n|\r|\n)/g, '<br>')
    });
    /*
      Synopsis:
      James had a forbidden relationship with a teacher but they played things safe until his graduation.
    */
    this.chapters.push({
      name: 'My Teacher Keeps Her Promise',
      text: `
        
      `.replace(/(?:\r\n|\r|\n)/g, '<br>')
    });
    /*
      Synopsis:
      James stays with his Step-Aunt for a weekend who makes sure James really enjoys his stay.
    */
    this.chapters.push({
      name: 'A Weekend With My Step-Mom\'s Sister',
      text: `
        
      `.replace(/(?:\r\n|\r|\n)/g, '<br>')
    });
    /*
      Synopsis:
      James spends some bonding time with his parents' swinger friends and their 2 daughters.
    */
    this.chapters.push({
      name: 'A Week With My Parent\'s Swinger Friends',
      text: `
        
      `.replace(/(?:\r\n|\r|\n)/g, '<br>')
    });
  }
}
