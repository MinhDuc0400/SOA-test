import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';
import { CommonService } from 'src/app/service/common.service';
import { DataService } from 'src/app/service/data.service';
import { SidebarService } from 'src/app/service/sidebar.service';
import { header, url } from 'src/app/shared/models/header.model';

@Component({
  selector: 'app-header-seven',
  templateUrl: './header-seven.component.html',
  styleUrls: ['./header-seven.component.scss'],
})
export class HeaderSevenComponent implements OnInit {
  public routes = routes;
  base = '';
  page = '';
  last = '';
  public scrollPosition = 0;

  public nav = false;
  header: header[] = [];
   

  constructor(
    private data: DataService,
    private router: Router,
    private common: CommonService,

    private sidebarService: SidebarService
  ) {
    this.header = this.data.header;
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.getroutes(event);
      }
    });
    this.getroutes(this.router);
  }

  private getroutes(route: url): void {
    const splitVal = route.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];

    if (this.base == 'userpages') {
      this.nav = false;
    } else {
      this.nav = true;
    }
  }
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.scrollPosition = window.scrollY;
    });
  }
}
