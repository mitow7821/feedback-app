import { Component } from '@angular/core';
import { NavigationService } from 'src/core/services/navigation.service';
import { ListItemModel } from '../dashboard/models/list-item';
import { ListItemsService } from 'src/core/services/list-items.service';
import { ActivatedRoute } from '@angular/router';
import { CommentModel } from 'src/core/models/comment';
import { ReplyInterface } from 'src/core/interfaces/comment';

const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });
const suffixes = new Map([
  ['one', 'Comment'],
  ['two', 'Comments'],
  ['few', 'Comments'],
  ['other', 'Comment'],
]);

interface ReplyEventInterface {
  comment: CommentModel;
  replyTag: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  item: ListItemModel | undefined;
  replyEventData: undefined | ReplyEventInterface;

  constructor(
    public navigationService: NavigationService,
    public listItemsService: ListItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.listItemsService.getItem(id, (foundItem) => {
      this.item = foundItem;
    });
  }

  get itemComments() {
    return this.item?.comments ?? [];
  }

  public formatOrdinals(n: number) {
    const rule = pr.select(n);
    const suffix = suffixes.get(rule);
    return `${n} ${suffix}`;
  }

  public enableReply(e: ReplyEventInterface) {
    this.replyEventData = e;
  }
}
