import { createAction } from 'redux-actions';

export const DASHBOARD_ATTRACTION_ONMOUNT_REQUEST_NAME = 'DASHBOARD_ATTRACTION_ONMOUNT_REQUEST';
export const DASHBOARD_ATTRACTION_ONMOUNT_REQUEST = createAction(DASHBOARD_ATTRACTION_ONMOUNT_REQUEST_NAME);
export const DASHBOARD_ATTRACTION_ONMOUNT_SUCCESS_NAME = 'DASHBOARD_ATTRACTION_ONMOUNT_SUCCESS';
export const DASHBOARD_ATTRACTION_ONMOUNT_SUCCESS = createAction(DASHBOARD_ATTRACTION_ONMOUNT_SUCCESS_NAME);
export const DASHBOARD_ATTRACTION_ONMOUNT_ERROR_NAME = 'DASHBOARD_ATTRACTION_ONMOUNT_ERROR';
export const DASHBOARD_ATTRACTION_ONMOUNT_ERROR = createAction(DASHBOARD_ATTRACTION_ONMOUNT_ERROR_NAME);

export const DASHBOARD_ATTRACTION_DELETE_NAME = 'DASHBOARD_ATTRACTION_DELETE';
export const DASHBOARD_ATTRACTION_DELETE = createAction(DASHBOARD_ATTRACTION_DELETE_NAME);
export const DASHBOARD_ATTRACTION_NEW_NAME = 'DASHBOARD_ATTRACTION_NEW';
export const DASHBOARD_ATTRACTION_NEW = createAction(DASHBOARD_ATTRACTION_NEW_NAME);
export const DASHBOARD_ATTRACTION_RESET_NAME = 'DASHBOARD_ATTRACTION_RESET';
export const DASHBOARD_ATTRACTION_RESET = createAction(DASHBOARD_ATTRACTION_RESET_NAME);

export const DASHBOARD_ATTRACTION_WATCH_NAME = 'DASHBOARD_ATTRACTION_WATCH';
export const DASHBOARD_ATTRACTION_WATCH = createAction(DASHBOARD_ATTRACTION_WATCH_NAME);

export const DASHBOARD_ATTRACTION_SUBMIT_REQUEST_NAME = 'DASHBOARD_ATTRACTION_SUBMIT_REQUEST';
export const DASHBOARD_ATTRACTION_SUBMIT_REQUEST = createAction(DASHBOARD_ATTRACTION_SUBMIT_REQUEST_NAME);
export const DASHBOARD_ATTRACTION_SUBMIT_SUCCESS_NAME = 'DASHBOARD_ATTRACTION_SUBMIT_SUCCESS';
export const DASHBOARD_ATTRACTION_SUBMIT_SUCCESS = createAction(DASHBOARD_ATTRACTION_SUBMIT_SUCCESS_NAME);
export const DASHBOARD_ATTRACTION_SUBMIT_ERROR_NAME = 'DASHBOARD_ATTRACTION_SUBMIT_ERROR';
export const DASHBOARD_ATTRACTION_SUBMIT_ERROR = createAction(DASHBOARD_ATTRACTION_SUBMIT_ERROR_NAME);
