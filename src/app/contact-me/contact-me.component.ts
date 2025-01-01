import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

	onSubmitQuery(){
		alert("Something went wrong. \n\n Please send your query to CalsiBowling@gmail.com");
	};
}
