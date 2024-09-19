import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cvLink: string = 'https://drive.google.com/file/d/your-cv-file-id/view?usp=sharing';

  aboutMe1: string = `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`;

  aboutMe2: string = `Currently, I work as a Software Engineer, focusing on developer tooling and infrastructure, with background interest in cloud technologies, 
                      distributed systems, and web applications. I enjoy seeking out creative solutions to complex problems and building things that empower others 
                      to do the same..`

  aboutMe3: string = `Welcome to my own little corner of the web, where I share notes and resources on topics that interest me.`


  ngOnInit() {

  }
}