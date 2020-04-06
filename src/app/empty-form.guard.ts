import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from './person.service';


@Injectable({
  providedIn: 'root'
})
export class EmptyFormGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.personService.filledform){
      console.log(this.personService.filledform);
      return true;
    } else {
      return this.router.parseUrl("");
    }
  }

  constructor(private personService: PersonService, private router: Router){}
}
