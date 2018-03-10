$(document).ready(resetSlider);
$(document).ready(centerIcons);
$(document).ready(defaultSounds);
$(document).ready(defaultAlertTime);


// bottom navigation bar
function centerIcons() {
  $('.icons i').addClass('d-flex justify-content-center align-items-center');
  $('.icons p').addClass('d-flex justify-content-center align-items-center mt-1');
}

function defaultSounds() {
  $('#sound2').addClass('active');
  $('#sound22').addClass('active');
  localStorage.setItem("soundscape", 2);
  localStorage.setItem("alarm", 22);
}

function resetSlider() {
  var slider = document.getElementById('downtimeRange');
  if (slider != null) {
    sessionStorage.setItem("downtimeVal", 0);
    sessionStorage.setItem("downtimeValSecs", 0);
  }
}
//resets productive time to 0
// Used when user starts or ends a work session
function resetPTimer() {
  sessionStorage.setItem("pTimeVal", 0);
  sessionStorage.setItem("pTimeValSecs", 0);
}

// links downtime slider to downtime timer
function updateTimeRange(val) {
  document.getElementById("downtime").innerHTML = val;
  sessionStorage.setItem("downtimeVal", val);
  sessionStorage.setItem("downtimeValSecs", "00");
}

function defaultAlertTime(val){
  val = 5;
  document.getElementById("alerttime").innerHTML = val + " minutes";
  sessionStorage.setItem("alerttimeVal", val);
  sessionStorage.setItem("alerttimeValSecs", "00");
  console.log(val);
}
// alert time slider
function updateAlertTime(val) {
  if (val == 1)
    document.getElementById("alerttime").innerHTML = val + " minute";
  else
    document.getElementById("alerttime").innerHTML = val + " minutes";
  localStorage.setItem("AlertTime", val);
  sessionStorage.setItem("alerttimeVal", val);
  sessionStorage.setItem("alerttimeValSecs", "00");
  console.log(val);
}


    // HELP POP-UPS 
    function helpStart() {
      alert("Every time you go off-task, SoundTrack will alert you at decreasing" +
        " intervals to help you stay productive and focused. To get started, simply" +
        " choose your favorite soundscape and customize the alert for your current task!");
    }

// enable tooltips later for index
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Scrolling for Soundscape
$(function(){
  var isDown = false, currentX = 0, currentY = 0;
  $('#scroll1').scrollLeft(515);
  $('#scroll1').mousemove(function(event){
    if(isDown === true){
     //$('#scroll1').scrollTop($('#scroll1').scrollTop() + (currentY - event.pageY)); 
     $('#scroll1').scrollLeft($('#scroll1').scrollLeft() + (currentX - event.pageX));
     currentY = event.pageY;
     currentX = event.pageX;
   }
 });
  
  $('#scroll1').mousedown(function(event){
    isDown = true;
    currentY = event.pageY;
    currentX = event.pageX;
  });
  
  $('#scroll1').mouseup(function(){
    isDown = false;
  });
})

//Scrolling for Alert sound
$(function(){
  var isDown = false, currentX = 0, currentY = 0;
  $('#scroll2').scrollLeft(860);
  $('#scroll2').mousemove(function(event){
    if(isDown === true){
     //$('#scroll2').scrollTop($('#scroll2').scrollTop() + (currentY - event.pageY)); 
     $('#scroll2').scrollLeft($('#scroll2').scrollLeft() + (currentX - event.pageX));
     currentY = event.pageY;
     currentX = event.pageX;
   }
 });
  
  $('#scroll2').mousedown(function(event){
    isDown = true;
    currentY = event.pageY;
    currentX = event.pageX;
  });
  
  $('#scroll2').mouseup(function(){
    isDown = false;
  });
})

// show if sound buttons are selected, deselects non-active buttons
$('.scape').click( function() {
  $('.scape').removeClass( "active" );
  $( this ).addClass( "active" );
  // if (($('.scape').hasClass('active')) && ($('.alarm').hasClass('active'))) {
  //   $('.float').removeClass('disabled');
  // }
});

$('.alarm').click( function() {
  $('.alarm').removeClass( "active" );
  $( this ).addClass( "active" );
  // if (($('.scape').hasClass('active')) && ($('.alarm').hasClass('active'))) {
  //   $('.float').removeClass('disabled');
  // }
});


// ///////////////////////////////////Google Analytics
// $('#StartWorking').click(function(){
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Start Working clicked' 
//   });

// });

// ///////////////////////////////////Google Analytics NEW
// $('#SettingsButtonNEW').click(function(){
//   var timeSincePageLoad = Math.round(performance.now());
//   console.log(timeSincePageLoad);
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Settings clicked index NEW' 
//   });
//   // Sends the timing event to Google Analytics.
//   gtag('event', 'click', {
//     'name': 'load',
//     'value': timeSincePageLoad,
//     'event_label': timeSincePageLoad,
//     'event_category': 'Time to click Settings index NEW'
//   });
// });

// $('#HelpButtonNEW').click(function(){
//   var timeSincePageLoad = Math.round(performance.now());
//   console.log(timeSincePageLoad);
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Help clicked index NEW' 
//   });
//   // Sends the timing event to Google Analytics.
//   gtag('event', 'click', {
//     'name': 'load',
//     'value': timeSincePageLoad,
//     'event_label': timeSincePageLoad,
//     'event_category': 'Time to click Help index NEW'
//   });
// });

// $('#ProfileButtonNEW').click(function(){
//   var timeSincePageLoad = Math.round(performance.now());
//   console.log(timeSincePageLoad);
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Profile clicked index NEW' 
//   });
//   // Sends the timing event to Google Analytics.
//   gtag('event', 'click', {
//     'name': 'load',
//     'value': timeSincePageLoad,
//     'event_label': timeSincePageLoad,
//     'event_category': 'Time to click Profile index NEW'
//   });
// });

// $('#LogoutButtonNEW').click(function(){
//   var timeSincePageLoad = Math.round(performance.now());
//   console.log(timeSincePageLoad);
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Logout clicked index NEW' 
//   });
//   // Sends the timing event to Google Analytics.
//   gtag('event', 'click', {
//     'name': 'load',
//     'value': timeSincePageLoad,
//     'event_label': timeSincePageLoad,
//     'event_category': 'Time to click Logout index NEW'
//   });
// });

// ///////////////////////////////////Google Analytics OLD
// $('#SettingsButtonOLD').click(function(){
//   var timeSincePageLoad = Math.round(performance.now());
//   console.log(timeSincePageLoad);
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Settings clicked index OLD' 
//   });
//   // Sends the timing event to Google Analytics.
//   gtag('event', 'click', {
//     'name': 'load',
//     'value': timeSincePageLoad,
//     'event_label': timeSincePageLoad,
//     'event_category': 'Time to click Settings index OLD'
//   });
// });

// $('#HelpButtonOLD').click(function(){
//   var timeSincePageLoad = Math.round(performance.now());
//   console.log(timeSincePageLoad);
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Help clicked index OLD' 
//   });
//   // Sends the timing event to Google Analytics.
//   gtag('event', 'click', {
//     'name': 'load',
//     'value': timeSincePageLoad,
//     'event_label': timeSincePageLoad,
//     'event_category': 'Time to click Help index OLD'
//   });
// });

// $('#ProfileButtonOLD').click(function(){
//   var timeSincePageLoad = Math.round(performance.now());
//   console.log(timeSincePageLoad);
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Profile clicked index OLD' 
//   });
//   // Sends the timing event to Google Analytics.
//   gtag('event', 'click', {
//     'name': 'load',
//     'value': timeSincePageLoad,
//     'event_label': timeSincePageLoad,
//     'event_category': 'Time to click Profile index OLD'
//   });
// });

// $('#LogoutButtonOLD').click(function(){
//   var timeSincePageLoad = Math.round(performance.now());
//   console.log(timeSincePageLoad);
//   console.log("test");
//   gtag('event', 'click', {
//     'event_category': 'Logout clicked index OLD' 
//   });
//   // Sends the timing event to Google Analytics.
//   gtag('event', 'click', {
//     'name': 'load',
//     'value': timeSincePageLoad,
//     'event_label': timeSincePageLoad,
//     'event_category': 'Time to click Logout index OLD'
//   });
// });
