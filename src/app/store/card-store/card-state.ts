import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ICard } from 'src/app/model/ICard';

export const featureAdapter: EntityAdapter<ICard> = createEntityAdapter<ICard>({
  selectId: model => model.id,
  sortComparer: (newCard: ICard, oldCard: ICard): number =>
  oldCard.toString().localeCompare(newCard.toString())
});

export interface State extends EntityState<ICard> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);