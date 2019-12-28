import { Actions, ActionTypes } from './card-actions';
import { featureAdapter, initialState, State } from './card-state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.CREATE: {
    return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: true,
        error: null
      });
    }
    case ActionTypes.UPDATE: {
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.DELETE: {
      return {
        ...state,
        isLoading: false,
        error: null
      };
    }
    default: {
      return state;
    }
  }
}