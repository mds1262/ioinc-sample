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
import { Geolocation } from "@capacitor/geolocation";
import { useStore } from "vuex";
import { kakaoKey } from "@/common/utils/common/keys";
import markers from '@/common/jsons/location.json'
export default {
  components: {
    IonCard,
    // IonItem,
    IonCardContent,
  },

  setup(props, context) {
    const kakaoMap = ref(null);
    const store = useStore();

    let map;

    onMounted(async () => {
      await currentPosition();
      if (window.kakao && window.kakao.maps) {
        // 즉시 로드가 안되는 부분이 발생되여 timout 처리함
        setTimeout(() => {
          setupedMap();
        }, 1000);
      } else {
        initMap();
      }
    });

    const initMap = () => {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${kakaoKey}&libraries=clusterer`;

      document.head.appendChild(script);

      script.addEventListener("load", () => {
        window.kakao.maps.load(() => {
          const map = loadMap();
          clickMap(map);
          mapMarker(map, markers);
        });
      });
    };

    const setupedMap = () => {
      const map = loadMap();
      clickMap(map);
      mapMarker(map, markers);
    };

    const loadMap = () => {
      const elem = document.getElementById("kakaoMap");

      const { accuracy, latitude, longitude } =
        store.getters["moduleMap/getCurrentPosition"];

      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 1,
      };

      //   console.log(kakaoMap.value)
      map = new window.kakao.maps.Map(elem, options);
      return map;
    };

    const clickMap = (map) => {
      return window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        // 클릭한 위도, 경도 정보를 가져옵니다
        const { latLng, point } = mouseEvent;
        // 위도
        const lat = latLng.getLat();
        //   // 경도
        const lng = latLng.getLng();

        markers.push({
          title: "Click Point",
          lat,
          lng,
        });

        mapMarker(map, markers);
      });
    };

    const mapMarker = (map, markersObj) => {
      const Clusterer = new window.kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 1, // 클러스터 할 최소 지도 레벨
      });
      //  const imgSrc = require("@/assets/map/markerStar.png");
      const imgSize = new window.kakao.maps.Size(24, 35);
      const markerImage = new window.kakao.maps.MarkerImage(
        "https://i1.daumcdn.net/dmaps/apis/n_local_blit_04.png",
        imgSize
      );

      const markers = markersObj.map((marker) => {
        return new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(marker.lat, marker.lng),
          title: marker.title,
          image: markerImage,
        });
      });

      Clusterer.addMarkers(markers);
    };

    const currentPosition = async () => {
      const checkPermission = await Geolocation.checkPermissions();
      console.log(checkPermission)
      if(checkPermission.location === 'denied' || checkPermission.coarseLocation === 'denied'){
          const permissionOptions = {
              permissions:['location', 'coarseLocation']
          }
          const permissionState = await Geolocation.requestPermissions(permissionOptions);
          console.log(permissionState)
      }
  
      const { coords } = await Geolocation.getCurrentPosition({enableHighAccuracy:true});
      const { accuracy, latitude, longitude } = coords;
      store.dispatch("moduleMap/updateCurrentPositionAction", {
        accuracy,
        latitude,
        longitude,
      });
    };

    return {
      kakaoMap,
      initMap,
      map,
      markers,
      clickMap,
      mapMarker,
      currentPosition,
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
