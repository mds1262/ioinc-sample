// import 'http://dapi.kakao.com/v2/maps/sdk.js?appkey=4d0fc9bc0d0323721d8522d538d59ed5'
// // import { Axios, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

// // const axios = new Axios();

let kakao;

const setKakaoMap = async (script, elem) => {
    // const script = document.createElement("script");
    kakao = window.kakao;
    /* global kakao */
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4d0fc9bc0d0323721d8522d538d59ed5";
    document.head.appendChild(script);

   
    console.log(kakao)
    // await initLoadMap(window.kakao.maps, elem)

    // kakao.maps.load(loadMap);
}

const initLoadMap= async (maps, elem)  => {
    console.log(maps)

    //    const options = {
    //     center: maps.LatLng(33.450701, 126.570667),
    //     level: 3
    // };

    // const map = maps.Map(elem, options);
    // return map;
}

// const setHeaders = (...headers: [{key:string, value:string | number | boolean}]): AxiosRequestHeaders => {
//     if(headers.length === 0){

//     }
// }

export { setKakaoMap }
   