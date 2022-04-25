const ionicStore = (store) => {
  store.subscribe(async (mutation, state) => {
    console.log(mutation);
    console.log(state);
    await store.$ionicStorage._db.setItem("store", store);
  });
};

export { ionicStore };
