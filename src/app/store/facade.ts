import { Store } from "@ngrx/store";
import { counterSelector$ } from "./selector";
import { decrement, increment, reset } from "./action";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterFacade{

    counterSelector$ = this.store.select(counterSelector$)

    constructor(private store:Store){}

    incrementCounter(){
        this.store.dispatch(increment());
    }

    decrementCounter(){
        this.store.dispatch(decrement());
    }

    resetCounter(){
        this.store.dispatch(reset());
    }
}