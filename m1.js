const {subscribe} =require('./observer.js');

subscribe('message', (data) => {
    console.log('module 1 resived data', data);
})