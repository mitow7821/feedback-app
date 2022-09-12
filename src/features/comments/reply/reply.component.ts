import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertType } from 'src/core/enums/alert-type';
import { CommentModel } from 'src/core/models/comment';
import { AlertService } from 'src/core/services/alert.service';
import { ListItemsService } from 'src/core/services/list-items.service';
import { v4 } from 'uuid';
import { faker } from '@faker-js/faker';

interface ReplyEventInterface {
  comment: CommentModel;
  replyTag: string;
}

@Component({
  selector: 'reply [replyEventData]',
  templateUrl: './reply.component.html',
  styles: [],
})
export class ReplyComponent {
  constructor(
    private listItemsService: ListItemsService,
    private alertService: AlertService
  ) {}

  comment = new FormControl('', {
    validators: [Validators.required, Validators.maxLength(250)],
  });

  @Input() replyEventData!: ReplyEventInterface;
  @Output() cancleReply = new EventEmitter();

  get leftChars() {
    return 250 - (this.comment.value?.length ?? 0);
  }

  public addReply() {
    if (!this.comment.value) {
      return;
    }

    this.replyEventData.comment.addReply({
      comment: this.comment.value,
      id: v4(),
      img: faker.image.avatar(),
      name: faker.name.fullName(),
      replyTag: this.replyEventData.replyTag,
      tag: `@${faker.internet.userName()}`,
    });

    this.listItemsService.items.next(this.listItemsService.items.getValue());

    this.comment.setValue('');
    this.cancleReply.emit();
    this.alertService.openAlert({
      type: AlertType.SUCCESS,
      title: 'Success',
      description: 'Reply has been added!',
    });
  }
}
