import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/distinctUntilChanged";
import { BreadCrumb } from './Breadcrumb';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],

})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs$ = this.router.events
    .filter(event => event instanceof NavigationEnd)
    .distinctUntilChanged()
    .map(event => this.buildBreadCrumb(this.activatedRoute.root));
  // Build your breadcrumb starting with the root route of your current activated route
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {


  }
  buildBreadCrumb(route: ActivatedRoute, url: string = '',
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'login';
    const path = route.routeConfig;
    const nextUrl = `/${url}${path}`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = [breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }



}


