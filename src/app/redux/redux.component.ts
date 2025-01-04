import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/reduces';
import { Observable } from 'rxjs';
import { counterSelector$ } from '../store/selector';
import { decrement, increment } from '../store/action';
import { CounterFacade } from '../store/facade';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.scss']
})
export class ReduxComponent {

   number = 0;
   cuonterState:Observable<number>
   constructor(private counterFacade:CounterFacade){
    this.cuonterState = this.counterFacade.counterSelector$;
   }

   increment(){
    this.counterFacade.incrementCounter();
   }

   decrement(){
    this.counterFacade.decrementCounter();
   }

   reset(){
    this.counterFacade.resetCounter();
   }

}
