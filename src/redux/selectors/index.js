import { get } from 'lodash';

export const isLoading = state => get(state, "select.isLoading");
export const videos = state => get(state, "select.videos");
export const video = state => get(state, "select.video");