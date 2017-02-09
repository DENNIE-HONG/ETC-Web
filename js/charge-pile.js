chargemap();
function chargemap() {
  // var toolbar_h = document.getElementById('charge_bar').offsetHeight; 
  // console.log(document.body.clientHeight);
  // var map_h = document.getElementById('charge-map').offsetHeight;
  // var result_h = document.body.clientHeight - toolbar_h - map_h;
  // document.getElementById('r-result').style.cssText = "height:" + result_h + "px";
  // console.log(map_h);
  var map = new BMap.Map("charge-map");
  var mPoint = new BMap.Point(116.404, 39.915);  
  map.enableScrollWheelZoom();
  map.centerAndZoom(mPoint,13);
  var circle = new BMap.Circle(mPoint,5000,{fillColor:"transparent", strokeWeight: 0 ,fillOpacity: 0, strokeOpacity: 0});
  map.addOverlay(circle);
  var local = new BMap.LocalSearch(map, {
    renderOptions: {map: map, panel: "r-result"}
  });
  local.searchNearby('充电桩',mPoint,5000);
}

