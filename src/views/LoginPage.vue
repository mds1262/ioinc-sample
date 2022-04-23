<template>
  <ion-page>
    <ion-content>
      <form @submit.prevent="userLogin">
        <ion-card>
          <ion-card-header>
            <ion-card-title color="success">Reciclica</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input
                type="email"
                required
                ref="emailElem"
                autofocus="“true”"
                v-model="loginForm.loginEmail"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input
                type="password"
                required
                v-model="loginForm.loginPw"
              ></ion-input>
            </ion-item>
            <ion-button type="submit" color="success" size="full"
              >Login</ion-button
            >
            <ion-button
              type="button"
              color="tertiary"
              size="full"
              @click="googleAccountLogin"
              >GoogleLogin</ion-button
            >
            <ion-button
              color="dark"
              fill="clear"
              size="full"
              @click="moveForgot"
              >Forgot email/password</ion-button
            >            
            <ion-button
              color="success"
              fill="clear"
              size="full"
              @click="moveRegister"
              >Register</ion-button
            >
          </ion-card-content>
        </ion-card>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";

import {
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonContent,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { loginToastOptions } from "@/common/utils/login/commonMessage";
import generateToast from "@/common/utils/common/toast";
import {
  resetPassword,
  googleLoginPopup,
  loginSign,
} from "@/common/utils/login/firebase";
import { UserCredential } from "@firebase/auth";
// const useLoginFormState = () => {
//   return reactive({
//     loginEmail: "",
//     loginPw: "",
//   });
// };

export default defineComponent({
  components: {
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    IonContent,
  },

  setup() {
    const store = useStore();

    const router = useRouter();
    // const loginForm = useLoginFormState();
    const loginForm = ref({ loginEmail: "", loginPw: "" });

    const emailElem: any = ref(null);

    const userLogin = async () => {
      const inputLoginForm = await loginForm.value;

      const userCredentinal = await loginSign(inputLoginForm);

      await loginProcess(userCredentinal);
    };

    const googleAccountLogin = async () => {
      const userCredentinal = await googleLoginPopup();

      await loginProcess(userCredentinal);
    };

    const moveRegister = async () => {
      const toastOption = loginToastOptions("register", false);
      const toaster = await generateToast(toastOption);

      await toaster.present();

      router.push({
        path: "/register",
      });
    };

    const moveForgot = async () => {
      // const [ target ]= emailElem.value;
      let toastOption = loginToastOptions("forgot", false);

      let toaster = await generateToast(toastOption);

      if (loginForm.value.loginEmail.length === 0) {
        await emailElem.value.$el.setFocus();
        await toaster.present();
        return;
      }

      toastOption = loginToastOptions("forgot", true);

      toaster = await generateToast(toastOption);

      await resetPassword(loginForm.value.loginEmail);

      await toaster.present();

      // store.dispatch("moduleLoading/updateLoadingAction", true);

      // setTimeout(() => {
      //   store.dispatch("moduleLoading/updateLoadingAction", false);
      // }, 3000);
    };

    const loginProcess = async (userCredential?: UserCredential) => {
      let toastOption = loginToastOptions("forgot", false);
      let toaster = await generateToast(toastOption);

      if (!userCredential) {
        store.dispatch("moduleLogin/loginInAction", userCredential);

        toaster.present();
        return;
      }

      toastOption = loginToastOptions("login", true);
      toaster = await generateToast(toastOption);

      store.dispatch("moduleLogin/loginInAction", userCredential);

      await toaster.present();

      console.log(store.getters["moduleLogin/loginUserInfo"]);
      router.push({
        path: "/home",
      });
    };

    return {
      userLogin,
      moveRegister,
      moveForgot,
      googleAccountLogin,
      emailElem,

      loginForm,
    };
  },
});
</script>

<style lang="scss" scoped>
ion-button[color="dark"] {
  text-transform: initial;
}

ion-content {
  --background: var(--ion-color-success);
}
</style>
