var doshit = function ($) {
  $("#jenkins-home-link").html("").addClass("mappedin-logo");
  $('#search-box').attr("placeholder", "Search...").focus().next("a").remove();
  $('a[href="?auto_refresh=true"]').text("Auto Refresh").addClass("auto-refresh disabled");
  $('a[href="?auto_refresh=false"]').text("Auto Refresh").addClass("auto-refresh enabled");
  $("#footer").parents("table").remove();
  $("#view-message").remove();
  $("#projectstatus").next("table").attr("style", "").find("div[align=right]").attr("style", "").find("span").remove();
  $("#projectStatus").next("table").attr("style", "").find("div[align=right]").attr("style", "").find("span").remove();
  $("#main-panel .dashboard table:first").remove();
  $("h1.build-caption").next().next().addClass("activity").prev().remove();
  if ($("h1.page-headline").size() && $("#buildHistory").size()) {
    $("#buildHistory").insertAfter("#side-panel");
    $("#main-panel").appendTo("#side-panel");
    $("#main-panel div[align=right]").remove();
  }
  $('a[href="/me/my-views"]').parents(".task").remove();
}
window.onload = function() {
  console.log("Leander's theme is starting, lol.");
  var el = document.createElement('div');
  var b = document.getElementsByTagName('body')[0];
  var otherlib = true;
  el.style.position='fixed';
  el.style.height='32px';
  el.style.width='220px';
  el.style.marginLeft='-110px';
  el.style.top='0';
  el.style.left='50%';
  el.style.padding='5px 10px';
  el.style.zIndex = 1001;
  el.style.fontSize='12px';
  el.style.color='#222';
  el.style.backgroundColor='#f99';
  if (typeof jQuery!='undefined') return;
  if (typeof $ == 'function') {
    otherlib = true;
  }
  // more or less stolen form jquery core and adapted by paul irish
  function getScript(url,success){
    var script=document.createElement('script');
    script.src=url;
    var head=document.getElementsByTagName('head')[0],
    done=false;
    // Attach handlers for all browsers
    script.onload=script.onreadystatechange = function(){
      if ( !done && (!this.readyState
       || this.readyState == 'loaded'
       || this.readyState == 'complete') ) {
        done=true;
        success();
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
      }
    };
    head.appendChild(script);
  }
  getScript('https://code.jquery.com/jquery-latest.min.js',function() {
    if (typeof jQuery == 'undefined') return;
    doshit(jQuery.noConflict());
  });
}

