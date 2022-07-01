import { ordered, restocked } from './features/cake/cakeSlice';
import store from './store'

console.log(`initial state `, store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('updated state ', store.getState());
})

store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(restocked(3))

unsubscribe()
