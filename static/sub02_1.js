document.addEventListener('DOMContentLoaded', function(){ 
    kakaoMapView();
});

function kakaoMapView(){
    var container = document.getElementById("map");     // 지도를 담을 영역의 DOM 레퍼런스
    var options = { // 지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.7854, 128.4698),   // 지도의 중심 좌표
        level: 12    // 지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(container, options);
}