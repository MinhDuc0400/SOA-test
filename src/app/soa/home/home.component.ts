import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';
import * as AOS from 'aos';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public routes = routes;

  bloc_1: any;
  headerMenu = [];
  address: any;
  links: any;
  constructor(public router: Router, private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    const lang = this.route.snapshot.params['lang'] || 'fr';
    this.apiService.get('https://api.test.soa-dev.net/api/v1/pages?lang=' + lang).subscribe(
      res => {
        this.bloc_1 = res[0].bloc_1;
        this.headerMenu = res[0].head_menu;
        this.address = res[0].footer.address;
        this.links = res[0].footer.links;

      }
    )
  }
}
