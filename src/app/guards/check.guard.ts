import { CanDeactivateFn } from '@angular/router';
import { ProductModelDrivenComponent } from '../product/product-model-driven/product-model-driven.component';

export interface ICanDeActivateClass
{
   checkCanDeActivate(): boolean;
}

export const checkGuard: CanDeactivateFn<ICanDeActivateClass> = (component, currentRoute, currentState, nextState) => {
  return component.checkCanDeActivate();;
};
