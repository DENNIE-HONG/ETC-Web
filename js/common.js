function menushow(){
  var menu = document.getElementById("menu");
  var menulist = document.getElementById("menulist");
  if(menulist.style.display !='none')
    menulist.style.cssText  = "display:none;";
  else
    menulist.style.cssText  = "display:block;";

}