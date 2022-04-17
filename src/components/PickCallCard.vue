<template>
  <ion-card>
    <ion-card-header v-if="headerOnOff">
      <ion-card-subtitle>Last pickup call</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-item lines="none">
        <ion-icon
          :md="hourglassOutline"
          slot="start"
          color="warning"
        ></ion-icon>
        <ion-label>
          {{ cardStatus }}
          <p>{{ cardUpdateAt }}</p>
        </ion-label>
      </ion-item>
      <ion-item lines="none">
        <ion-label>
          <p>{{ `Created at ${cardCreatedAt}` }}</p>
          <p v-if="cardNotes?.length > 0">{{ cardNotes }}</p>
        </ion-label>
      </ion-item>
      <ion-button v-if="footerOnOff" size="full" fill="clear" color="success" @click="movePickup">See All</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";
import {
  IonCard,
  IonButton,
  IonItem,
  IonLabel,
  IonCardSubtitle,
  IonCardHeader,
  IonIcon,
  IonCardContent 
} from "@ionic/vue";

import { hourglassOutline } from "ionicons/icons";


export default defineComponent({
  props: {
    hasHeader: Boolean,
    hasFooter: Boolean,
    
    status: String,
    createdAt: String,
    updateAt: String,
    notes: String,
  },

  components: {
    IonCard,
    IonButton,
    IonItem,
    IonLabel,
    IonCardSubtitle,
    IonCardHeader,
    IonIcon,
    IonCardContent 
  },

  setup(props) {
    const router = useRouter();

    const {hasHeader, hasFooter, status, createdAt, updateAt, notes } = toRefs(props);

    const headerOnOff = hasHeader;
    const footerOnOff = hasFooter;

    const cardStatus = status;
    const cardCreatedAt = createdAt;
    const cardUpdateAt = updateAt;
    const cardNotes = notes;

    const movePickup = () => {
      router.push({
        path: "/pickup-calls",
      });
    };

    return {
      movePickup,

      headerOnOff,
      footerOnOff,

      cardStatus,
      cardCreatedAt,
      cardUpdateAt,
      cardNotes,

      hourglassOutline
    }
  }
});
</script>

<style lang="scss" scoped>
ion-card {
  ion-card-subtitle {
    text-transform: uppercase;
    font-weight: bold;
  }
  p {
    white-space: normal;
  }
}
</style>
