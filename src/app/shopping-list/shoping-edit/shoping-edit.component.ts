import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingService) { }

  ngOnInit(): void {
  }

    onAddItem(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.slService.addIngredient(newIngredient);
    }
}
