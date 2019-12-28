import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
          
  import { ICard } from 'src/app/model/ICard';
  
  import { featureAdapter, State } from './card-state';
  
  export const getError = (state: State): any => state.error;
  
  export const getIsLoading = (state: State): boolean => state.isLoading;
  
  export const selectMyFeatureState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('myFeature');
  
  export const selectAllMyFeatureItems: (
    state: object
  ) => ICard[] = featureAdapter.getSelectors(selectMyFeatureState).selectAll;
  
  export const selectMyFeatureById = (id: number) =>
    createSelector(this.selectAllMyFeatureItems, (allMyFeatures: ICard[]) => {
      if (allMyFeatures) {
        return allMyFeatures.find(p => p.id === id);
      } else {
        return null;
      }
    });
  
  export const selectMyFeatureError: MemoizedSelector<object, any> = createSelector(
    selectMyFeatureState,
    getError
  );
  
  export const selectMyFeatureIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(selectMyFeatureState, getIsLoading);