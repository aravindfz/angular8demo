import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable, of } from 'rxjs';

@Injectable()
export class Resolver implements Resolve<any>{
    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
        return of([
            { name: 'Aravind' },
            { name: 'Bob' },
            { name: 'Alice' }]);
    }
}