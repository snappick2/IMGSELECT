import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loggedIn: boolean = false;
  username: string = '';
  password: string = '';
  girlsList: string[] = [
    // 'pinup',
    // 'peanut',
    // 'wendy',
    // 'generica',
    // 'lotus',
    // 'sofia',
    // 'caitlin',
    // 'honey',
    // 'sawyer',
    // 'lake',
    // 'willow',
    // 'blanche',
    // 'babybelle',
    // 'francine',
    // 'amelia',
    // 'darkone',
    // 'qpiddy',
    // 'quill',
    // 'elle',
    // 'iro',
    // 'nina',
    // 'karma',
    // 'catara',
    // 'suzu',
    // 'mallory',
    // 'brie',
    // 'audrey',
    // 'nikki',
    // 'tiffany',
    // 'aiko',
    // 'lola',
    // 'beli',
    // 'kyanna',
    // 'jessie',
    // 'momo',
    // 'kyu',
    // 'celeste',
    // 'venus',
    // 'la_mimichanenishiabindingbrand',
    // 'la_leila',
    // 'la_rae',
    // 'la_bikiniblondie',
    // 'la_anastacia',
    // 'la_kbass',
    // 'la_karen',
    // 'bath',
    // 'brato',
    // 'case',
    // 'grab',
    // 'hipp',
    // 'quad',
    // 'rose',
    // 'sanmi',
    // 'whip',
    'nh_maibathhousebonding',
    'nh_stepsisandmomtakecare',
    'nh_jealousboy',
    'nh_villagecomingofage',
    'nh_strangecountryside',
    'nh_helpuncle',
    'nh_notleaveisland',
    'nh_garden',
    'nh_villagecustom',
    'nh_gfsmom',
    'nh_sketching',
    'nh_summerbreak',
    'nh_seriouspool',
    'nh_mamilk',
    'nh_mysister',
    'nh_mymom',
    'nh_ideallife',
    'nh_suckingvillage',
    'nh_yowayowasensei',
    'nh_hospitalized',
    'nh_suddenlysister',
    'nh_satensan',
    'nh_brothel1',
    'nh_brothel2',
    'nh_futhotsprings',
    'nh_futcommercial',
    'nh_futbeachpolice',
    'nh_girlsinbloom',
    'nh_training',
  ];

  constructor(
    private router: Router
  ) {}

  login(): void {
    if (this.username.toLowerCase().trim() === 'aassdd' && this.password === 'ddssaa') {
      this.loggedIn = true;
    } else {
      this.username = '';
      this.password = '';
    }
  }

  viewGirl(girl: string): void {
    this.router.navigate(['home/view-girl'], { state: { girl } });
  }
}
