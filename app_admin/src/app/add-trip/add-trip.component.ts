import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { Router } from "@angular/router"; 
import { TripDataService } from '../services/trip-data.service'; 

@Component({ 
  selector: 'app-add-trip', 
  templateUrl: './add-trip.component.html', 
  styleUrls: ['./add-trip.component.css'] 
}) 
export class AddTripComponent implements OnInit { 
  
  addForm: FormGroup; 
  submitted = false; 
  public formError: string = '';
  
  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private tripService: TripDataService 
    ) { } 
    
  ngOnInit() { 
    this.addForm = this.formBuilder.group({ 
      _id: [], 
      code: ['', Validators.required], 
      name: ['', Validators.required], 
      length: ['', Validators.required], 
      start: ['', Validators.required], 
      resort: ['', Validators.required], 
      perPerson: ['', Validators.required], 
      image: ['', Validators.required], 
      description: ['', Validators.required], 
    }) 
  } 
  
  onSubmit() { 
    this.submitted = true; 
    if(this.addForm.valid){
      this.tripService.addTrip(this.addForm.value) 
      .then( data => { 
        console.log(data); 
        alert("Successfully added trip.")
        this.router.navigateByUrl('list-trips');  // Navigates to the trips listing page
      })
      .catch((message) => {
        this.formError = message;
        alert(message);
      });
    } else {
      alert("Invalid data and/or incomplete form. Please try again.");
    } 
  } 
};  