import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { CarData, ServerResponse } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarRent';

  constructor(private fb: FormBuilder, private appService: AppService) {

  };

  contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required]
  });

  carsData: CarData[] = [];
  category = 'sport';
  choosedCar = 'assets/images/cars/rolls.png';

  ngOnInit() {
    this.appService.getQuery(this.category).subscribe((carsData) => this.carsData = carsData as CarData[]);
  }

  toggleCategory(category: string) {
    this.category = category;
    this.ngOnInit();
  }
  
  scrollTo(targetObject: HTMLElement, car?: string, carImage?: string) {
    targetObject.scrollIntoView({behavior: 'smooth'});
    
    if(carImage) this.choosedCar = carImage;
    if(car) this.contactForm.patchValue({car: car});
  };

  validateFormInputs() {
    if(this.contactForm.valid) {
      this.appService.sendQuery(this.contactForm.value)
      .subscribe({
        next: (response: Object) => {
          alert((response as ServerResponse).message);
          this.contactForm.reset();
        },
        error: (response: HttpErrorResponse) => {
          alert(response.error.message);
        }
      })
    }
  };

  trans = {};
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }

  bgPos = {}
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.2 * window.scrollY) + 'px'};
  }
}
