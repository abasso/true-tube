import {Injectable} from "@angular/core";
import {Profile} from "./profile.model";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class ProfileResolver implements Resolve<Profile>
{
    // TODO: load this from injectable config object?
    private profileUrl = 'http://d8-dev.truetube.co.uk/me';

    constructor(private http: AuthHttp) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Profile>
    {
        return this.http.get(this.profileUrl)
            .map(r => r.json())
            .map(Profile.hydrate);
    }
}
