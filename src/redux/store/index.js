import { createStore, appyMiddleware, applyMiddleware } from 'redux';
import createSagaMiddleware, { runSaga } from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';


//crear un store que funcione como funcion
export default () => {
    const sagaMiddleware = createSagaMiddleware();
    return{
        ...createStore(reducers, applyMiddleware(sagaMiddleware)), //se puede tener otros middleware
        runSaga: sagaMiddleware.run(sagas) //crea los watchers
    }
}