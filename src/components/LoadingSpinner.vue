<template>
  <div class="backdrop" v-if="isShow">
    <ion-spinner name="crescent" size="20" color="success"> </ion-spinner>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonSpinner, onIonViewWillEnter } from "@ionic/vue";
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default defineComponent({
  components: {
    IonSpinner,
  },

  setup() {
      const store = useStore();
      
      const isShow = computed(() => {
          return store.getters['moduleLoading/getLoadingState'];
      })

      return {
          isShow
      }
  }
});
</script>

<style lang="scss" scoped>
.backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;

    ion-spinner {
        flex: 1;
        align-self: center;
    }
}
</style>
