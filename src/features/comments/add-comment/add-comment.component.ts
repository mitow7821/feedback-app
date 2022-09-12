import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertType } from 'src/core/enums/alert-type';
import { AlertService } from 'src/core/services/alert.service';
import { ListItemsService } from 'src/core/services/list-items.service';
import { ListItemModel } from 'src/features/dashboard/models/list-item';

@Component({
  selector: 'add-comment [item]',
  templateUrl: './add-comment.component.html',
  styles: [],
})
export class AddCommentComponent {
  comment = new FormControl('', {
    validators: [Validators.required, Validators.maxLength(250)],
  });

  @Input() item!: ListItemModel;

  constructor(
    private listItemsService: ListItemsService,
    private alertService: AlertService
  ) {}

  get leftChars() {
    return 250 - (this.comment.value?.length ?? 0);
  }

  public addComment() {
    if (!this.comment.value) {
      return;
    }

    this.listItemsService.addComment(this.item, this.comment.value);
    this.comment.setValue('');
    this.alertService.openAlert({
      type: AlertType.SUCCESS,
      title: 'Success',
      description: 'Comment has been added!',
    });
  }
}
