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
            <ion-button
              color="dark"
              fill="clear"
              size="full"
              @click="moveForgot"
              >Forgot email/password</ion-button
            >
            <ion-button type="submit" color="success" size="full"
              >Login</ion-button
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

import { loginCheck } from "@/common/utils/login/loginAuth";
import generateToast from "@/common/utils/common/toast";
import { resetPassword } from "@/common/utils/login/firebase";
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

      const resultLogin = await loginCheck(inputLoginForm);

      const toaster = await generateToast({
        position: "bottom",
        message: resultLogin.message,
        color: "primary",
        duration: 2000,
      });

      if (!resultLogin.isSuccess) {
        toaster.present();
        return;
      }

      store.dispatch("moduleLogin/loginInAction", resultLogin.userInfo);

      await toaster.present();

      router.push({
        path: "/home",
      });
    };

    const moveRegister = () => {
      router.push({
        path: "/register",
      });
    };

    const moveForgot = async () => {
      // const [ target ]= emailElem.value;
      // console.log(emailElem.value)

      let toaster = await generateToast({
        position: "bottom",
        message: "Insert Your Email",
        color: "danger",
        duration: 3000,
      });

      if (loginForm.value.loginEmail.length === 0) {
        await toaster.present();
        return;
      }

      toaster = await generateToast({
        position: "bottom",
        message: "Send Email for Your Reset Password",
        color: "primary",
        duration: 3000,
      });

      await resetPassword(loginForm.value.loginEmail);

      await toaster.present();

      // store.dispatch("moduleLoading/updateLoadingAction", true);

      // setTimeout(() => {
      //   store.dispatch("moduleLoading/updateLoadingAction", false);
      // }, 3000);
    };

    return {
      userLogin,
      moveRegister,
      moveForgot,
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
