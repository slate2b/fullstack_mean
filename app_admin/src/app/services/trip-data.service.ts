import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import { Trip } from '../models/trip';
import { User } from '../models/user'; 
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { REQUEST_HEADERS } from '../headers';
import { REQUEST_OPTIONS } from '../request-options';

@Injectable()
export class TripDataService {

  constructor(
    private http: Http, 
    @Inject(BROWSER_STORAGE) private storage: Storage,  // Inject the browser storage into a variable we can use in the storage class
    @Inject(REQUEST_HEADERS) private headers: Headers,
    @Inject(REQUEST_OPTIONS) private requestOptions: RequestOptions,
    ) { }

  // Setting urls to handle the requests below
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips`;

  /*
  // This section handles HTTP requests related to the trips
  */
  
  // Sets the HTTP request options to include the token in the authorization header
  private setRequestOptions(): RequestOptions {
    const token = this.storage.getItem('travlr-token');  // Get token from localStorage
    this.headers.delete("Authorization");  // Clear any existing authorization headers
    this.headers.append("Authorization", "Bearer " + token);  // Add new authorization with current token to the header
    this.requestOptions.headers = this.headers;  // Add the header to requestOptions

    return this.requestOptions;  // Return the requestOptions
  }

  // Add a trip through the UI
  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    
    // Call the setRequestOptions method to add authorization token the HTTP request
    this.requestOptions = this.setRequestOptions();

    // Send the HTTP request and handle the response
    return this.http
      .post(
        this.tripUrl, // The url for the request
        formData,  // formData is being passed as the body of the request
        this.requestOptions)  // requestOptions is being passes as the options of the request
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }
  
  // Return a trip to the UI
  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + "/" + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  // Return an array of trips to the UI
  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  // Edits a trip through the UI
  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    
    // Call the setRequestOptions method to add authorization token the HTTP request
    this.requestOptions = this.setRequestOptions();

    // Send the HTTP request and handle the response
    return this.http
      .put(
        this.tripUrl + "/" + formData.code,  // url of request includes the trip code (formData.code)
        formData,  // formData is being passed as the body of the request
        this.requestOptions)  // requestOptions is being passes as the options of the request
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  // Deletes a trip through the UI
  public deleteTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#deleteTrip');
    console.log(formData);
    
    // Call the setRequestOptions method to add authorization token the HTTP request
    this.requestOptions = this.setRequestOptions();

    // Send the HTTP request and handle the response
    return this.http
      .delete(
        this.tripUrl + "/" + formData.code,  // url of request includes the trip code (formData.code)
        this.requestOptions)  // requestOptions is being passes as the options of the request
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  // Handles errors
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);  // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /*
  // This section handles HTTP requests related to the user
  */
  public register(user: User): Promise<AuthResponse> {  // Returns an AuthResponse
    return this.makeAuthApiCall('register', user); 
  }
  public login(user: User): Promise<AuthResponse> {  // Returns an AuthResponse
    return this.makeAuthApiCall('login', user);
  }

  // HTTP POST request logic used by the register and login methods
  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> { 
    const url: string = `${this.apiBaseUrl}/${urlPath}`; 
    return this.http 
    .post(url, user)  // HTTP request
    .toPromise()  // HTTP response
    .then (response => response.json() as AuthResponse)  // Map the HTTP response as an AuthResponse object
    .catch(this.handleError); 
  }
}
