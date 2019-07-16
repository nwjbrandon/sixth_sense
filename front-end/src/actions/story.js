import { createAction } from 'redux-actions';

export const STORY_ONMOUNT_REQUEST_NAME = 'STORY_ONMOUNT_REQUEST';
export const STORY_ONMOUNT_REQUEST = createAction(STORY_ONMOUNT_REQUEST_NAME);

export const STORY_ONMOUNT_SUCCESS_NAME = 'STORY_ONMOUNT_SUCCESS';
export const STORY_ONMOUNT_SUCCESS = createAction(STORY_ONMOUNT_SUCCESS_NAME);

export const STORY_ONMOUNT_ERROR_NAME = 'STORY_ONMOUNT_ERROR';
export const STORY_ONMOUNT_ERROR = createAction(STORY_ONMOUNT_ERROR_NAME);