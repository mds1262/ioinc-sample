import { Storage } from "@ionic/storage";

export default {
  install: async (app) => {
    const storage = new Storage();
    const storageInstance = await storage.create();

    app.config.globalProperties.$ionicStorage = storageInstance;
    app.config.globalProperties.$store.$ionicStorage = storageInstance; // This one is only needed if you want to access the ionic storage instance in your VUEX store actions
  },
};
