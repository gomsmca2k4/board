import { createAction, props } from '@ngrx/store';
import { ICard } from 'src/app/model/ICard';

export const createCard = createAction(
  '[Card Feature] Create',
  props<ICard>()
);
export const deleteCard = createAction(
  '[Card Feature] Create',
  props<{ id: number }>()
);