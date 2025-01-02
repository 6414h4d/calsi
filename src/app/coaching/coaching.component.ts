import { Component } from '@angular/core';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.css']
})
export class CoachingComponent {

	scrollAbout(el:HTMLElement){
		el.scrollIntoView();
	}
	scrollAchieve(el:HTMLElement){
		el.scrollIntoView();
	}
	scrollRates(el:HTMLElement){
		el.scrollIntoView();
	}
}
