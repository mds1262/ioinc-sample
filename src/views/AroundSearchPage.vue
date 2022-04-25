<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-back-button defaultHref=""></ion-back-button>
        </ion-buttons>
        <ion-title>Pickup-Call</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- <img src="assets/img/guide_rotate_slow.gif" /> -->
      <!-- <div ref="mapElem" style="width: 500px; height: 400px"></div> -->
      <KakaoMap />
      <AroundProfileCard
        :hasHeader="true"
        :hasFooter="true"
        :status="`on Hold`"
        :createdAt="`2022/04/15 14:00:00`"
        :updateAt="`2021/04/15 14:00:00`"
        :notes="`we have two bags that are full, one with plastic and the other with glasses`"
      />
      <ion-list>
        <ion-item lines="inset">
          <ion-label position="floating"> Notes </ion-label>
          <ion-textarea></ion-textarea>
        </ion-item>
      </ion-list>
      <!-- <ion-button size="full" color="success" @click="moveHome"
        >Create Pickup Call</ion-button
      > -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonTitle,
  IonBackButton,
  IonToolbar,
  IonLabel,
  IonCard,
  IonList,
  IonItem,
  IonButton,
  IonCardContent,
  IonTextarea,
  IonButtons,
  onIonViewDidEnter,
  onIonViewWillEnter,
} from "@ionic/vue";

import { arrowBackOutline } from "ionicons/icons";

// import { setKakaoMap } from "@/common/utils/common/kakaomap.js";
import KakaoMap from "@/components/KakaoMap.vue";
import AroundProfileCard from "../components/AroundProfileCard.vue";

export default defineComponent({
  components: {
    IonHeader,
    IonContent,
    IonPage,
    IonTitle,
    IonBackButton,
    IonToolbar,
    IonLabel,
    IonList,
    IonItem,
    IonTextarea,
    IonButtons,
    KakaoMap,
    AroundProfileCard,
  },

  setup() {
    const router = useRouter();

    const moveHome = () => {
      router.push({
        path: "/home",
      });
    };

    return {
      moveHome,
      arrowBackOutline,
      // mapElem,
      // initMap,
      // map,
      // kakao,
    };
  },
});
</script>

<style lang="scss" scoped>
ion-button {
  margin: 15px;
}
</style>
