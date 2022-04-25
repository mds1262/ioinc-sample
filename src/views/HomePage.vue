<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list color="success">
        <ion-item color="success">
          <ion-avatar slot="start">
            <img src="assets/icon/favicon.png" />
          </ion-avatar>
          <ion-label>
            <h1>Moon Test</h1>
            <p>Gathered: <span class="money">$ 200</span></p>
          </ion-label>
        </ion-item>
      </ion-list>

      <!-- <PickCallCard
        :hasHeader="true"
        :hasFooter="true"
        :status="`on Hold`"
        :createdAt="`2022/04/15 14:00:00`"
        :updateAt="`2021/04/15 14:00:00`"
        :notes="`we have two bags that are full, one with plastic and the other with glasses`"
      /> -->
    </ion-content>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color="success" @click="moveNewPickup">
        <ion-icon :md="addCircleOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PickCallCard from "@/components/PickCallCard.vue";
import { useRouter } from "vue-router";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonMenuButton,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonFab,
  IonFabButton,
} from "@ionic/vue";
import { addCircleOutline } from "ionicons/icons";

export default defineComponent({
  components: {
    // PickCallCard,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonMenuButton,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    IonFab,
    IonFabButton,
  },

  setup() {
    const router = useRouter();

    const moveNewPickup = () => {
      router.push({
        path: "/aroundSearch",
      });
    };

    return {
      moveNewPickup,
      addCircleOutline,
    };
  },
});
</script>

<style lang="scss" scoped>
ion-list {
  padding: 0;
  box-shadow: 0 1px 2px 1px rgb(0 0 0 / 20%);
  .money {
    font-weight: bold;
  }
}
</style>
