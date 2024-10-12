import { Component } from '@angular/core';
import { SecondSectionComponent } from '../second-section/second-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SecondSectionComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    public date = new Date().getDay()

    ngOnInit(){
      console.log(this.date);
      
    }
}
