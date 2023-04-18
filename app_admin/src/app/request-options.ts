import { InjectionToken } from '@angular/core'; 
import { RequestOptions } from '@angular/http';

export const REQUEST_OPTIONS = new InjectionToken<RequestOptions>('Request Options', { 
    providedIn: 'root', 
    factory: () => new RequestOptions
});
