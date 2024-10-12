import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetchService } from '../service/fetch.service';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css'
})
export class SecondSectionComponent {
    constructor(public myfetch: FetchService){}
    public myfoodlist: any

  ngOnInit(){
    this.myfoodlist = this.myfetch.foodItems
    this.myfoodlist.push(this.myfetch.foodItems)

    console.log(this.myfetch.foodItems);
    
  }
}
