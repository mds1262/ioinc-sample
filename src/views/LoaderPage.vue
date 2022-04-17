<template>
  <ion-page>
    <ion-content>
      <div class="flex-center">
        <ion-spinner name="crescent" color="success"></ion-spinner>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonSpinner,
  IonPage,
  onIonViewDidEnter,
  onIonViewWillEnter,
} from "@ionic/vue";

import { useRouter } from 'vue-router'

export default defineComponent({
  name: "LoaderPage",
  components: {
    IonContent,
    IonSpinner,
    IonPage,
  },

  setup() {
    const router = useRouter()

    onIonViewWillEnter(() => {
      console.log("Home page will enter");
    });

    onIonViewDidEnter(() => {
      setTimeout(() => {
    //   console.log(context.attrs);
      router.push({
          path: '/login',
      })
      }, 3000);
    });

    // onIonViewWillLeave(() => {
    //   console.log("Home page will leave");
    // });

    // onIonViewDidLeave(() => {
    //   console.log("Home page did leave");
    // });
  },
});
</script>

<style lang="scss" scoped></style>
