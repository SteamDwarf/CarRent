import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarRent';

  constructor(private fb: FormBuilder) {

  };

  contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required]
  });

  carsData = [
    {
      img: '1.png',
      title: 'Lamborghini Huracan Spyder',
      transmission: 'атомат',
      engine: 5.2,
      year: 2019
    },
    {
      img: '2.png',
      title: 'Chevrolet Corvette',
      transmission: 'атомат',
      engine: 6.2,
      year: 2017
    },
    {
      img: '3.png',
      title: 'Ferrari California',
      transmission: 'атомат',
      engine: 3.9,
      year: 2010
    },
    {
      img: '4.png',
      title: 'Lamborghini Urus',
      transmission: 'атомат',
      engine: 4.0,
      year: 2019
    },
    {
      img: '5.png',
      title: 'Audi R8',
      transmission: 'атомат',
      engine: 5.2,
      year: 2018
    },
    {
      img: '6.png',
      title: 'Chevrolet Camaro',
      transmission: 'атомат',
      engine: 2.0,
      year: 2019
    },
    {
      img: '7.png',
      title: 'Maserati Quattroporte',
      transmission: 'атомат',
      engine: 3.0,
      year: 2018
    },
    {
      img: '8.png',
      title: 'Dodge Challenger',
      transmission: 'атомат',
      engine: 6.4,
      year: 2019
    },
    {
      img: '9.png',
      title: 'Nissan GT-R',
      transmission: 'атомат',
      engine: 3.8,
      year: 2019
    },
  ];
  
  scrollTo(targetObject: HTMLElement, car?: string) {
    targetObject.scrollIntoView({behavior: 'smooth'});

    if(car) this.contactForm.patchValue({car: car});
  };

  validateFormInputs() {
    if(this.contactForm.valid) {
      alert('Спасибо за заявку. Мы свяжемся с вами в ближайшее время!');
      this.contactForm.reset();
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
