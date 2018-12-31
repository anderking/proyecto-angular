import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public name:string;
	public job:string;
	public web:string;
	public description:string;

	constructor() { 
		this.name = "Anderson Diaz";
		this.job = "Desarrollador Angular";
		this.web = "www.andersondiaz.com.ve";
		this.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde aut ut, aliquam harum doloremque quod quam iste id, voluptatem perferendis. Aspernatur praesentium pariatur, soluta laborum consectetur, harum similique delectus?"
	}

	ngOnInit() {
	}

}
