import { legacy_createStore} from 'redux';
import ProductReducer from '../reducers/ProductReducer'

const store = legacy_createStore(ProductReducer);
console.log(store,"hhhhhh")
export default store;