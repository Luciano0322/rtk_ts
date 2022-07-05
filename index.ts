import { ordered, restocked } from './features/cake/cakeSlice';
import { icecreamAction } from './features/icecream/icecreamSlice';
import store from './store'

console.log(`initial state `, store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated state ', store.getState());
})

store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(restocked(3))

store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.restocked(5))

unsubscribe()
