import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  public foodItems: Array<{
      name:string
      price:number
      desc:string
    }> = [
      {
        name:"Burger",
        price: 180.00,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        name:"Chicken",
        price:77.60,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        name:"Fried Chicken",
        price:85.00,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        name:"Noodels",
        price:50.00,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
    ]

  

  constructor() { }
}
