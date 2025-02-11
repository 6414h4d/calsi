import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

	onSubmitQuery(formData: any){
		console.log(formData);
		alert("Something went wrong. \n\n Please send your query to CalsiBowling@gmail.com");
	};
}
