import { Component } from '@angular/core';

@Component({
	selector: 'todo-list',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	items = ["Angular 4", "React", "Underscore"];
	newItem = "";
	pushItem = function () {
		if (this.newItem != "") {
			this.items.unshift(this.newItem);
			this.newItem = "";
		}
	}
	removeItem = function (index) {
		this.items.splice(index, 1);
	}
}
