<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons>
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title
            >What do you want to do with the recyclable waste?</ion-card-title
          >
        </ion-card-header>
        <ion-card-content>
          <ion-radio-group>
            <ion-item>
              <ion-label>I want to buy it</ion-label>
              <ion-radio value="CLIENT" slot="start"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>I want to sell it</ion-label>
              <ion-radio value="PARTNER" slot="start"></ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Input Join</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input type="text" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Confirm password</ion-label>
            <ion-input type="password" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Phone number</ion-label>
            <ion-input type="tel"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title> Address Information</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <!-- <ion-item>
            <ion-label position="floating">Address</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Number</ion-label>
            <ion-input type="tel"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Neighborhood</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Complement</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Zip code</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">State</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">City</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item> -->
        </ion-card-content>
      </ion-card>
    </ion-content>
    <ion-button size="full" color="light" @click="moveHome"
      >Register</ion-button
    >
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonPage,
  IonBackButton,
  IonTitle,
  IonLabel,
  IonRadioGroup,
  IonRadio,
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonButtons,
    IonButton,
    IonHeader,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonPage,
    IonBackButton,
    IonTitle,
    IonLabel,
    IonRadioGroup,
    IonRadio,
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
    };
  },
});
</script>

<style lang="scss" scoped>
ion-content {
  --background: var(--ion-color-success);
}
</style>
