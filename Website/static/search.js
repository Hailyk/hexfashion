/**
 * Created by jiahao on 2/13/2016.
 */
$(document).ready(function(){
  $('#search').submit(function(){
    debugger;
    var hexCode = $('#search-value').val();
    if(hexCode == "000000") {
      window.location.href = "http://" + window.location.hostname + "/search/colorvalue=000000";
      return false;
    }else if(hexCode == "ffffff"){
      window.location.href = "http://" + window.location.hostname + "/search/colorvalue=ffffff";
      return false;
    }else{
      window.location.href = "http://" + window.location.hostname + "/";
      return false;
    }
  });
});