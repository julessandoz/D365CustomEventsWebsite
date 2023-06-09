import { environment } from './../../../environments/environment';
import { TracksService } from './../tracks.service';
import { Session } from '../../models/Session';
import { HttpHelper } from '../../helpers/HttpHelper';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_HELPER } from '../../providers/http.helper.provider';

@Injectable()
export class TracksRestService implements TracksService {

    private static readonly tracksEndpoint: string = 'tracks';

    constructor(@Inject(HTTP_HELPER) private http: HttpHelper) {
    }

    public getSessions(trackId: String): Observable<Session[]> {
        if (environment.useMockData) {
            // load event data from mock data file
            return this.http.get<Session[]>(`assets/mocks/api/responses/api/events/tracks/${trackId}/sessions`);
        }
        return this.http.get<Session[]>(`${environment.apiEndpoint}${TracksRestService.tracksEndpoint}/${trackId}/sessions`);
    }
}
