import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from 'src/app/models/form';
import { FormFacadeService } from 'src/app/store/services/form-facade.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public formOpen = false;
	public completedForms$!: Observable<Form[]>;

	constructor(private formFacadeService: FormFacadeService) {
		this.completedForms$ = this.formFacadeService.getAllProducts();
	}

	ngOnInit(): void {}

	onStartForm() {
		this.formOpen = true;
	}
}



// Stuff to do *****

// Use selectors to select item by id or title - this could be done by the searchbar

// Look into uploading files that can be attached to items

// Make a backend or database

// Find a way of dragging and dropping items
