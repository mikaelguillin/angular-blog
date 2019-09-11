import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-post-list-component',
	templateUrl: './post-list-component.component.html',
	styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

	posts = [
		{
			title: 'Mon premier post',
			content: 'Lorem ipsum',
			loveIts: 0
		},
		{
			title: 'Mon deuxième post',
			content: 'Lorem ipsum',
			loveIts: 0
		},
		{
			title: 'Mon troisième post',
			content: 'Lorem ipsum',
			loveIts: 0
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
