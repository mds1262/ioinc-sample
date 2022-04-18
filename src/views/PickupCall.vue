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
      <div ref="mapElem" style="width: 500px; height: 400px"></div>
      <ion-card>
        <ion-card-content>
          <p>Address: Fake street, 111</p>
          <p>Address: Fake street, 111</p>
          <p>Address: Fake street, 111</p>
          <p>Address: Fake street, 111</p>
          <p>Address: Fake street, 111</p>
        </ion-card-content>
      </ion-card>
      <ion-list>
        <ion-item lines="inset">
          <ion-label position="floating"> Notes </ion-label>
          <ion-textarea></ion-textarea>
        </ion-item>
      </ion-list>
      <ion-button size="full" color="success" @click="moveHome"
        >Create Pickup Call</ion-button
      >
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

import { setKakaoMap } from "@/common/utils/common/kakaomap.js";

export default defineComponent({
  components: {
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
  },

  setup() {
    const router = useRouter();
    const mapElem = ref(null);

    let map: any;
    let kakao: any;

    onMounted(() => {
      if (kakao && kakao.maps) {
        initMap();
      } else {
          const script = document.createElement("script");
          /* global kakao */
          kakao = window['kakao']
          if(kakao){
            script.onload = () => kakao.maps.load(initMap);
          }
          script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?autoload=true&appkey=915cffed372954b7b44804ed422b9cf0";
          document.head.appendChild(script);
      }
    });

    const initMap = () => {
      //  kakao = window['kakao']
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      map = new kakao.maps.Map(mapElem.value, options);
    };

    const moveHome = () => {
      router.push({
        path: "/home",
      });
    };

    return {
      moveHome,
      arrowBackOutline,
      mapElem,
      initMap,
      map,
      kakao,
    };
  },
});
</script>

<style lang="scss" scoped>
ion-button {
  margin: 15px;
}
</style>
