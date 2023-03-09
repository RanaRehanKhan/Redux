//how to read store
const unsubscribe = store.subscribe(()=>{console.log(store.getState());});
unsubscribe();