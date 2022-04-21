<template>
  <ion-card>
    <ion-card-content>
      <div ref="kakaoMap" id="kakaoMap" />
    </ion-card-content>
  </ion-card>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { IonCard, IonCardContent, IonItem } from "@ionic/vue";
import { kakaoKey } from "@/common/utils/common/keys";
export default {
  components: {
    IonCard,
    // IonItem,
    IonCardContent,
  },

  setup(props, context) {
    const kakaoMap = ref(null);
    let map;

    onMounted(() => {
      if (window.kakao && window.kakao.maps) {
          // 즉시 로드가 안되는 부분이 발생되여 timout 처리함
         setTimeout(() => { setupedMap() }, 1000)
      } else {
        initMap();
      }
    });

    const initMap = () => {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${kakaoKey}`;
      console.log(document.head)
      document.head.appendChild(script);
      script.addEventListener("load", () => {
          window.kakao.maps.load(loadMap)
      });
    };

    const setupedMap = () => {
      const map = loadMap();
      clickMap(map);
    };

    const loadMap = () => {
      const elem = document.getElementById("kakaoMap");

      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      //   console.log(kakaoMap.value)
      map = new window.kakao.maps.Map(elem, options);
      return map;
    };

    // const initMap = () => {
    //   window.kakao.maps.load(() => {
    //     const options = {
    //       center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    //       level: 3,
    //     };
    //     map = new window.kakao.maps.Map(kakaoMap.value, options);

    //     // window.kakao.maps.event.addListener('click', clickMap)
    //   });
    // };

    const clickMap = (map) => {
      return window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        // 클릭한 위도, 경도 정보를 가져옵니다
        const { latLng, point } = mouseEvent;
        // 위도
        const lat = latLng.getLat();
        //   // 경도
        const lng = latLng.getLng();

        return { lat, lng };
        //   let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
        //   message += "경도는 " + latlng.getLng() + " 입니다";
        //   console.log(message)

        //   var resultDiv = document.getElementById("result");
        //   resultDiv.innerHTML = message;
      });
    };

    return {
      kakaoMap,
      initMap,
      map,
      //   markerPositions,
      clickMap,
    };
  },
};
</script>

<style lang="scss" scoped>
ion-card-content {
  padding: 0px;
#kakaoMap {
  width: 100vh;
  height: 40vh;
}
}
</style>
