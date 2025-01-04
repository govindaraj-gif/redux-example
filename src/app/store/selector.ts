import { createFeatureSelector, createSelector, select, Store } from "@ngrx/store";
import {  getCount, State } from "./reduces";

export const selectUsetState = createFeatureSelector<State>('counter');

export const counterSelector$ = createSelector(
    selectUsetState , 
    getCount
)

