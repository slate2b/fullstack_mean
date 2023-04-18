import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  deleteForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    // retrieve stashed tripId
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something went wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('DeleteTripComponent#onInit found tripCode ' + tripCode);

    // initialize the form
    this.deleteForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })

    // disable the form controls to make more obvious to user that this form is for deletion
    this.deleteForm.controls.code.disable();
    this.deleteForm.controls.name.disable();
    this.deleteForm.controls.length.disable();
    this.deleteForm.controls.start.disable();
    this.deleteForm.controls.resort.disable();
    this.deleteForm.controls.perPerson.disable();
    this.deleteForm.controls.image.disable();
    this.deleteForm.controls.description.disable();

    console.log('DeleteTripComponent#onInit calling TripDataService#getTrip(\'' + tripCode + '\')'); 
    
    this.tripService.getTrip(tripCode) 
      .then(data => { 
        console.log(data); 
        // Don't use deleteForm.setValue() as it will throw console error
        this.deleteForm.patchValue(data[0]); 
    })
  } 
  
  onSubmit() { 
    // enable the form controls so the call to tripService.deleteTrip can access the data from the deleteForm
    this.deleteForm.controls.code.enable();
    this.deleteForm.controls.name.enable();
    this.deleteForm.controls.length.enable();
    this.deleteForm.controls.start.enable();
    this.deleteForm.controls.resort.enable();
    this.deleteForm.controls.perPerson.enable();
    this.deleteForm.controls.image.enable();
    this.deleteForm.controls.description.enable();
    // flip submitted to true
    this.submitted = true; 
    // Send the the form data to the tripService.deleteTrip method
    if (this.deleteForm.valid) { 
      this.tripService.deleteTrip(this.deleteForm.value) 
        .then(data => { 
          console.log(data); 
          alert("Successfully deleted trip.")
          this.router.navigateByUrl('list-trips');  // Navigates to the trips listing page
        }); 
    } 
  }
}
