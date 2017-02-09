main();
function main(){
  // 百度地图API功能
//   var map = new BMap.Map("allmap");
//   map.centerAndZoom(new BMap.Point(116.404, 39.915), 10);
//   // map.centerAndZoom(mPoint, 15);
//   map.enableScrollWheelZoom();
//   map.enableInertialDragging();

//   map.enableContinuousZoom();
//   var size = new BMap.Size(14, 15);
//   console.log("1");
//   map.addControl(new BMap.CityListControl({
//     anchor: BMAP_ANCHOR_TOP_LEFT,
//     offset: size,
//     // 切换城市之间事件
//     onChangeBefore: function(){
//        console.log('before');
//     },
//     // 切换城市之后事件
//     onChangeAfter: function(){
//       // alert('after');
//       var local = new BMap.LocalSearch(map, {renderOptions:{map: map}});
//       local.search("充电桩");
//     }
// }));
   // navigator.geolocation.getCurrentPosition(translatePoint); //定位
   // 百度地图API功能
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(116.331398,39.897445);
  map.centerAndZoom(point,11);
  var myCity = new BMap.LocalCity();
  myCity.get(myFun);
  var local = new BMap.LocalSearch(map, {renderOptions:{map: map}});
  local.search("充电桩");
  function myFun(result){
    var cityName = result.name;
    map.setCenter(cityName);
    console.log("当前定位城市:"+cityName);
  }
  


  // var toolbar_h = document.getElementById('toolbar').offsetHeight;
  // var allmap_h = document.getElementById('allmap').offsetHeight;
  // var nav_h = document.getElementById('nav').offsetHeight;
  // var conlist_h =document.getElementById('pay').offsetHeight;
  // var conlist_last_h = screen.availHeigh - toolbar_h - allmap_h -nav_h - conlist_h * 3;
  // console.log(conlist_last_h);
  // console.log(screen.height);
  // if(conlist_last_h > conlist_h){
  //   document.getElementById('call').style.cssText = "height:" + conlist_last_h + "px";
  //   document.getElementById('service').style.cssText = "height:" + conlist_last_h + "px";
  // }



  var charge_near = document.getElementById("charge-pile");
  charge_near.onclick = function(){
    // navigator.geolocation.getCurrentPosition(translatePoint); //定位
    // chargemap();
  };



  
}

function translatePoint(position){ 
  var currentLat = position.coords.latitude; 
  var currentLon = position.coords.longitude; 
  var gpsPoint = new BMap.Point(currentLon, currentLat); 
  BMap.Convertor.translate(gpsPoint, 0, initMap); //转换坐标 
}
function initMap(point){ 
  //初始化地图 
  map = new BMap.Map("allmap"); 
  map.addControl(new BMap.NavigationControl()); 
  map.addControl(new BMap.ScaleControl()); 
  map.addControl(new BMap.OverviewMapControl()); 
  map.centerAndZoom(point, 18); 
  map.addOverlay(new BMap.Marker(point))
  map.enableScrollWheelZoom();
  var circle = new BMap.Circle(mPoint,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
  map.addOverlay(circle);
  var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});  
  local.searchNearby('充电桩',mPoint,1000); 
} 
