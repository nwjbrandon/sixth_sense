import { createAction } from 'redux-actions';

export const DASHBOARD_EXPLORE_ONMOUNT_REQUEST_NAME = 'DASHBOARD_EXPLORE_ONMOUNT_REQUEST';
export const DASHBOARD_EXPLORE_ONMOUNT_REQUEST = createAction(DASHBOARD_EXPLORE_ONMOUNT_REQUEST_NAME);
export const DASHBOARD_EXPLORE_ONMOUNT_SUCCESS_NAME = 'DASHBOARD_EXPLORE_ONMOUNT_SUCCESS';
export const DASHBOARD_EXPLORE_ONMOUNT_SUCCESS = createAction(DASHBOARD_EXPLORE_ONMOUNT_SUCCESS_NAME);
export const DASHBOARD_EXPLORE_ONMOUNT_ERROR_NAME = 'DASHBOARD_EXPLORE_ONMOUNT_ERROR';
export const DASHBOARD_EXPLORE_ONMOUNT_ERROR = createAction(DASHBOARD_EXPLORE_ONMOUNT_ERROR_NAME);

export const DASHBOARD_EXPLORE_DELETE_NAME = 'DASHBOARD_EXPLORE_DELETE';
export const DASHBOARD_EXPLORE_DELETE = createAction(DASHBOARD_EXPLORE_DELETE_NAME);
export const DASHBOARD_EXPLORE_NEW_NAME = 'DASHBOARD_EXPLORE_NEW';
export const DASHBOARD_EXPLORE_NEW = createAction(DASHBOARD_EXPLORE_NEW_NAME);
export const DASHBOARD_EXPLORE_RESET_NAME = 'DASHBOARD_EXPLORE_RESET';
export const DASHBOARD_EXPLORE_RESET = createAction(DASHBOARD_EXPLORE_RESET_NAME);

export const DASHBOARD_EXPLORE_WATCH_NAME = 'DASHBOARD_EXPLORE_WATCH';
export const DASHBOARD_EXPLORE_WATCH = createAction(DASHBOARD_EXPLORE_WATCH_NAME);

export const DASHBOARD_EXPLORE_SUBMIT_REQUEST_NAME = 'DASHBOARD_EXPLORE_SUBMIT_REQUEST';
export const DASHBOARD_EXPLORE_SUBMIT_REQUEST = createAction(DASHBOARD_EXPLORE_SUBMIT_REQUEST_NAME);
export const DASHBOARD_EXPLORE_SUBMIT_SUCCESS_NAME = 'DASHBOARD_EXPLORE_SUBMIT_SUCCESS';
export const DASHBOARD_EXPLORE_SUBMIT_SUCCESS = createAction(DASHBOARD_EXPLORE_SUBMIT_SUCCESS_NAME);
export const DASHBOARD_EXPLORE_SUBMIT_ERROR_NAME = 'DASHBOARD_EXPLORE_SUBMIT_ERROR';
export const DASHBOARD_EXPLORE_SUBMIT_ERROR = createAction(DASHBOARD_EXPLORE_SUBMIT_ERROR_NAME);
