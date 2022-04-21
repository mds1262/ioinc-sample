<template>
  <ion-card>
    <ion-card-content>
      <div ref="kakaoMap" class="kakaoMap" />
    </ion-card-content>
  </ion-card>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { IonCard, IonCardContent } from "@ionic/vue";
import { kakaoKey } from "@/common/utils/common/keys";
export default {
  components: {
    IonCard,
    IonCardContent,
  },

  setup(props, context) {
    const kakaoMap = ref(null);
    let map;

    // const markerPositions= [
    //   { title: "카카오", latlng: new window.kakao.maps.LatLng(33.450705, 126.570677) },
    //   { title: "생태연못", latlng: new window.kakao.maps.LatLng(33.450936, 126.569477) },
    //   { title: "텃밭", latlng: new window.kakao.maps.LatLng(33.450705, 126.570677) },
    //   { title: "근린공원", latlng: new window.kakao.maps.LatLng(33.451393, 126.570738) },
    // ];

    onMounted(() => {
      if (!window.kakao || !window.kakao.maps) {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${kakaoKey}`;
        document.head.appendChild(script);

        script.addEventListener("load", initMap);
      }
    });

    const initMap = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        map = new window.kakao.maps.Map(kakaoMap.value, options);

        // window.kakao.maps.event.addListener('click', clickMap)
        window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          const latlng = mouseEvent.latLng;

          let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
          message += "경도는 " + latlng.getLng() + " 입니다";
          console.log(message)
        //   var resultDiv = document.getElementById("result");
        //   resultDiv.innerHTML = message;
        });
      });
    };

    const clickMap = (mouseEvent) => {
      console.log(mouseEvent);
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
  .kakaoMap {
    width: 500px;
    height: 400px;
  }
}
</style>
