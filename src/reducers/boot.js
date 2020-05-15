import { store } from './index';

export default () =>
    new Promise(() => {
        store.dispatch();
    });
