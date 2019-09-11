import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-post-list-item-component',
	templateUrl: './post-list-item-component.component.html',
	styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	created_at: any;

	constructor() {
		this.created_at = new Date();
	}

	ngOnInit() {
	}

	loveIt() {
		this.loveIts++;
	}

	dontLoveIt() {
		this.loveIts--;
	}

}
