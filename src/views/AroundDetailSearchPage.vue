<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Pickup-Calls</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- <PickCallCard
        :hasHeader="false"
        :hasFooter="false"
        :status="`Processing`"
        :createdAt="`2022/04/15 14:00:00`"
        :updateAt="`2021/04/15 14:00:00`"
        :notes="`we have two bags that are full, one with plastic and the other with glasses`"
      />

      <PickCallCard
        :hasHeader="false"
        :hasFooter="false"
        :status="`On hold`"
        :createdAt="`2022/04/15 14:00:00`"
        :updateAt="`2021/04/15 14:00:00`"
        :notes="`we have two bags that are full, one with plastic and the other with glasses`"
      />

      <PickCallCard
        :hasHeader="false"
        :hasFooter="false"
        :status="`Finished`"
        :createdAt="`2022/04/15 14:00:00`"
        :updateAt="`2021/04/15 14:00:00`"
      /> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PickCallCard from "@/components/PickCallCard.vue";
import {
  IonButtons,
  IonHeader,
  IonContent,
  IonPage,
  IonTitle,
  IonBackButton,
  IonToolbar
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonButtons,
    IonHeader,
    IonContent,
    IonPage,
    IonTitle,
    IonBackButton,
    PickCallCard,
    IonToolbar
  },
});
</script>

<style lang="scss" scoped>
p {
  white-space: normal;
}
</style>
