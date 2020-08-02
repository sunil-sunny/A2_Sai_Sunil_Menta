# Assignment 2

Assignment 2 of the course is all about creating front end pages with embedding lorem ipsum text. This application has users with three roles i.e patient,
doctor, and guest. Patients can log in and then search for doctors as per their requirements. After searching for the doctor, the patient can schedule an appointment with a doctor.
In the doctor's view of the application, he/she can approve or decline the appointment request.

Developed Landing page(Blogs), log in, Doctor Profile page, search doctor page, and View Appointments page. On opening the application all the links are active. 

On click of "Blogs" -> "Home Page which shows all the blogs to the guest user"
On click of "View Doctor Profile" -> " Page with Doctor details and appointment booking"
On click of "Search Doctor" --> "Page to search among available doctors and view their details for the user who logged in as patient"
On click of "View Appointments" --> "List all the appointments to the user when logged in as doctor"
On Click of "Login" --> "Login page"


* Date Created: June 08th, 2020
* Last Modification Date: June 14th, 2020


## Author

* Sai Sunil Menta: ss734478@dal.ca

## Frontend framework used
* Angular 8

## Repository Link
* https://git.cs.dal.ca/menta/a2_sai_sunil_menta

## Deployment
Deployed in Heroku
###  In Heroku

* Landing page - https://csci5709-assignment2.herokuapp.com/
* View Doctor - https://csci5709-assignment2.herokuapp.com/doctorpage
* View Appointments - https://csci5709-assignment2.herokuapp.com/accept
* Search Doctors - https://csci5709-assignment2.herokuapp.com/search
* Login - https://csci5709-assignment2.herokuapp.com/login


## Built With

*[Bootsrap] (https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css)-For resposnsiveness
*[node.js] (https://nodejs.org/en/download/)- Angular CLI is installed from npm (node package manager)
*[Material] (https://material.angular.io/guide/getting-started) - For cards and stepper


## Sources Used
### header.component.html

Lines 1-6
------------

```
<nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">My Doctient</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

```

The code above was created by adapting the code from [Boostrap] library as shown below: 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

```

-  The code in [Bootstarp] was implemented by adding CSS for background color and hovers for the links.




### homepage.component.html

Lines surrounded with mat-card
-----------------------------------

```
<mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="avatar"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>dui vivamus</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Volutpat ac tincidunt vitae semper quis lectus. Ut
          etiam sit amet
          nisl purus. Consectetur a erat nam at lectus urna duis convallis. Sit amet est placerat in egestas. Faucibus
          interdum
          posuere lorem ipsum dolor. Feugiat in fermentum posuere urna nec tincidunt praesent semper.
          Mauris ultrices eros in cursus turpis. Arcu dictum varius duis at consectetur lorem.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
        <button mat-stroked-button color="primary">View Full Blog</button>
      </mat-card-actions>
    </mat-card>

```

The code above was created by adapting the code in [Angular Material] as shown below: 

```
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>

```

-  The code in [Angular Material] was adopted and by removing headers from the card and changing the card dimensions in CSS along with hover.



### login.component.html

Lines 4  - 16
---------------

```
<mat-vertical-stepper [linear]="true">
      <mat-step label="Email" [stepControl]="emailFormGroup">
        <form [formGroup]="emailFormGroup">
          <ng-template matStepLabel>Email</ng-template>
          <mat-form-field>
            <mat-label>Email</mat-label>
            <input matInput placeholder="Email" #email formControlName="emailControl" required>
          </mat-form-field>
          <div class="container">
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>

```

The code above was created by adapting the code in [Angular Material] as shown as below:

```
<mat-vertical-stepper [linear]="isLinear" #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
```

- [Angular Material] was implemented by changing the auto linear functionality.

### login.component.html

Lines 11 - 15
---------------

```

    this.emailFormGroup = this.formBuilder.group({
      emailControl: ['', Validators.email],
    });
    this.passwordFormGroup = this.formBuilder.group({
      passwordControl: ['', [Validators.required]]
    });

```

The code above was created by adapting the code in [Form Validation - Angular](https://angular.io/guide/form-validation) as shown below: 

```
this.heroForm = new FormGroup({
    'name': new FormControl(this.hero.name, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    'alterEgo': new FormControl(this.hero.alterEgo),
    'power': new FormControl(this.hero.power, Validators.required)
  });

```

-  The code in [Form Validation - Angular](https://angular.io/guide/form-validation)  was implemented by adding validations to the field as form-control in component.ts files and is accessed in component.html 
file with form control name required.

### searchdoctor.component.html && searchdoctor.component.html

Lines surrounded with mat-card
-----------------------------------

```
    <mat-card class="example-card">
          <mat-card-header>
            <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title>Dr.Shiba Inu</mat-card-title>
            <mat-card-subtitle>Nuerologist</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>
              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
              bred for hunting.
            </p>
          </mat-card-content>

```

The code above was created by adapting the code in [Angular Material] as shown below: 

```
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>


```

-  The code in [Angular Material]  was adopted by adding removing pictures and headers from the card component. Extra CSS has been added with hover and dimension changes.

## Acknowledgments

* Inspired from Angular Material Modules for all the component HTML pages.
