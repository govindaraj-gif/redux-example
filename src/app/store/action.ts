import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Conter] Increment'
)

export const decrement = createAction(
    '[Conter] Decrement'
)

export const reset = createAction(
    '[Conter] Reset'
)