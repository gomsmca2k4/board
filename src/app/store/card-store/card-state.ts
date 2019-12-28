import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ICard } from 'src/app/model/ICard';

export const featureAdapter: EntityAdapter<ICard> = createEntityAdapter<ICard>({
  selectId: model => model.id,
  sortComparer: (newCard: ICard, oldCard: ICard): number =>
  oldCard.toString().localeCompare(newCard.toString())
});

export interface State extends EntityState<ICard> {
    isLoading: false,
    error: null
  }

export const initialState: State = featureAdapter.getInitialState(
  {
    name: '',
    id: 0,
    tasks: [],
    isLoading: false,
    error: null
  }
);