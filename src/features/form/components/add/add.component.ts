import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertType } from 'src/core/enums/alert-type';
import { ItemCategory } from 'src/core/enums/item-category';
import { ItemStatus } from 'src/core/enums/item-status';
import { AlertService } from 'src/core/services/alert.service';
import { ListItemsService } from 'src/core/services/list-items.service';
import { NavigationService } from 'src/core/services/navigation.service';
import { ListItemModel } from 'src/features/dashboard/models/list-item';
import { v4 } from 'uuid';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  itemCategories: ItemCategory[] = [];

  form = new FormGroup(
    {
      title: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      category: new FormControl(ItemCategory.FEATURE),
      description: new FormControl(''),
    },
    { updateOn: 'blur' }
  );

  constructor(
    public navigationService: NavigationService,
    public listItemsService: ListItemsService,
    private alertService: AlertService
  ) {
    this.itemCategories = Object.values(ItemCategory);
  }

  get titleErrors() {
    return (
      (this.form.controls.title.touched || this.form.controls.title.dirty) &&
      this.form.controls.title.errors
    );
  }

  public onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const payload = new ListItemModel({
      description: this.form.value.description ?? '',
      title: this.form.value.title ?? '',
      category: this.form.value.category ?? ItemCategory.FEATURE,
      comments: [],
      status: ItemStatus.PLANNED,
      upvotes: 0,
      id: v4(),
    });

    this.listItemsService.addItem(payload);
    this.alertService.openAlert({
      title: 'Success',
      type: AlertType.SUCCESS,
      description: 'Element has been added!',
    });
    this.navigationService.goBack();
  }
}
