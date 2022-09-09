import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertType } from 'src/core/enums/alert-type';
import { ItemCategory } from 'src/core/enums/item-category';
import { ItemStatus } from 'src/core/enums/item-status';
import { AlertService } from 'src/core/services/alert.service';
import { ListItemsService } from 'src/core/services/list-items.service';
import { NavigationService } from 'src/core/services/navigation.service';
import { ListItem } from 'src/features/dashboard/models/list-item';
import { v4 } from 'uuid';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styles: [],
})
export class EditComponent implements OnInit {
  item: ListItem | undefined;
  itemCategories = Object.values(ItemCategory);
  itemStatuses = Object.values(ItemStatus);
  form: FormGroup = new FormGroup({});

  constructor(
    public navigationService: NavigationService,
    public listItemsService: ListItemsService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.listItemsService.getItem(id, (foundItem) => {
      this.item = foundItem;
    });

    if (!this.item) {
      this.navigationService.goBack();

      return;
    }

    this.form = new FormGroup(
      {
        title: new FormControl(this.item.title ?? '', {
          validators: [Validators.required, Validators.minLength(3)],
        }),
        category: new FormControl(this.item.category ?? ItemCategory.FEATURE),
        status: new FormControl(this.item.status ?? ItemStatus.PLANNED),
        description: new FormControl(this.item.description ?? ''),
      },
      { updateOn: 'blur' }
    );
  }

  public removeItem() {
    const confirmation = confirm('Are you sure you want to proceed?');
    if (!confirmation || !this.item) {
      return;
    }

    this.listItemsService.removeItem(this.item.id);
    this.alertService.openAlert({
      title: 'Success',
      type: AlertType.WARNING,
      description: 'Element has been removed!',
    });
    this.navigationService.goBack(2);
  }

  public onSubmit() {
    if (!this.form.valid || !this.item) {
      return;
    }

    const payload: ListItem = {
      ...this.item,
      description: this.form.value.description ?? this.item.description,
      title: this.form.value.title ?? this.item.title,
      category: this.form.value.category ?? this.item.category,
      status: this.form.value.status ?? this.item.status,
    };

    this.listItemsService.updateItem(payload);
    this.alertService.openAlert({
      title: 'Success',
      type: AlertType.SUCCESS,
      description: 'Element has been edited!',
    });
    this.navigationService.goBack();
  }
}
