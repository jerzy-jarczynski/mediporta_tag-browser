import initialState from './initialState';
import { fetchStackOverflowTags } from '../api';

// actions
const createActionName = (actionName) => `app/tags/${actionName}`;
const FETCH_TAGS_REQUEST = createActionName('FETCH_TAGS_REQUEST');
const FETCH_TAGS_SUCCESS = createActionName('FETCH_TAGS_SUCCESS');
const FETCH_TAGS_FAILURE = createActionName('FETCH_TAGS_FAILURE');

// action creators
export const fetchTagsRequest = () => ({ type: FETCH_TAGS_REQUEST });
export const fetchTagsSuccess = (tags) => ({
  type: FETCH_TAGS_SUCCESS,
  payload: tags,
});
export const fetchTagsFailure = (error) => ({
  type: FETCH_TAGS_FAILURE,
  payload: error,
});

export const fetchTags = () => {
  return (dispatch) => {
    dispatch(fetchTagsRequest());
    fetchStackOverflowTags(1, 10)
      .then((tags) => {
        console.log('Fetched tags:', tags);
        dispatch(fetchTagsSuccess(tags));
      })
      .catch((error) => {
        console.error('Error fetching tags:', error.message);
        dispatch(fetchTagsFailure(error.message));
      });
  };
};

// reducer
const tagsReducer = (state = initialState.tags, action) => { // Zmiana initialState na initialState.tags
  switch (action.type) {
    case FETCH_TAGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        data: action.payload, // Zmiana tags na data
        loading: false,
        error: null,
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tagsReducer;
