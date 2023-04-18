import { InjectionToken } from '@angular/core'; 
import { Headers } from '@angular/http';

export const REQUEST_HEADERS = new InjectionToken<Headers>('Request Headers', { 
    providedIn: 'root', 
    factory: () => new Headers
});
