import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styles: [],
})
export class EditComponent implements OnInit {
  id: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']
    });
  }
}
