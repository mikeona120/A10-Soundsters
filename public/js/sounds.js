     //------- SOUNDS -----------//

    //first page sound javascript
    //soundscape
    var fallingRain = new Audio();
    var forestMorning = new Audio();
    var burningLogs = new Audio();
    var whiteNoise = new Audio();
    var CatMeowing = new Audio();
    var BeautifulChillMix = new Audio();
    var Ambulance = new Audio();
    var FrogCroak = new Audio();
    var OceanWave = new Audio();
    var AirPlane = new Audio();
    var Bee = new Audio();
    var PublicSwimmingPool = new Audio();
    var Fan = new Audio();
    var LaughingAndGigglingKids = new Audio();
    var PunchesAndSlaps = new Audio();
    var ScaryFootsteps = new Audio();
    var DogBarking = new Audio();
    var JungleBattleAmbience = new Audio();
    var CityStreet = new Audio();
    var Spaceship = new Audio();
    var NightWildlife = new Audio();
    var Piano = new Audio();
    var ShoppingMall = new Audio();
    var MiiPlaza = new Audio();

    fallingRain.src = "../sounds/fallingRain.mp3";
    forestMorning.src = "../sounds/forestMorning.mp3";
    //burningLogs.src = "../sounds/burningLogs.mp3";
    burningLogs.src = "../sounds/Fireplace.wav";
    whiteNoise.src = "../sounds/whiteNoise.mp3" ;
    //CatMeowing.src = "../sounds/CatMeowing.m4a" ;
    BeautifulChillMix.src = "../sounds/BeautifulChillMix.m4a" ;
    //Ambulance.src = "../sounds/Ambulance.m4a" ;
    FrogCroak.src = "../sounds/FrogCroak.mp3" ;
    //OceanWave.src = "../sounds/OceanWave.m4a" ;
    //AirPlane.src = "../sounds/AirPlane.m4a" ;
    //Bee.src = "../sounds/Bee.m4a" ;
    PublicSwimmingPool.src = "../sounds/PublicSwimmingPool.m4a" ;
    //Fan.src = "../sounds/Fan.m4a" ;
    //LaughingAndGigglingKids.src = "../sounds/LaughingAndGigglingKids.m4a" ;
    //PunchesAndSlaps.src = "../sounds/PunchesAndSlaps.m4a" ;
    //ScaryFootsteps.src = "../sounds/ScaryFootsteps.m4a" ;
    //DogBarking.src = "../sounds/DogBarking.m4a" ;
    //JungleBattleAmbience.src = "../sounds/JungleBattleAmbience.m4a" ;
    CityStreet.src = "../sounds/CityStreet.wav" ;
    Spaceship.src = "../sounds/Spaceship.wav" ;
	NightWildlife.src = "../sounds/NightWildlife.wav" ;
	Piano.src = "../sounds/Piano.mp3" ;
	ShoppingMall.src = "../sounds/ShoppingMall.wav" ;
	MiiPlaza.src = "../sounds/MiiPlaza.mp3" ;

    //alert sound
    var foghorn = new Audio();
    var beeping = new Audio();
    var siren = new Audio();
    var bells = new Audio();
    var Fart = new Audio();
    var No = new Audio();
    var EvilLaugh = new Audio();
    var InceptionButton = new Audio();
    var FinishHim = new Audio();
    var Dolphin = new Audio();
    var SadTrombone = new Audio();
    var ItTimeToStop = new Audio();
    var Hallelujah = new Audio();
    var Haha = new Audio();
    var Yes = new Audio();
    var IBelieveICanFly = new Audio();
    var Crickets = new Audio();
    var YouShallNotPass = new Audio();
    foghorn.src = "../sounds/foghorn.mp3";
    beeping.src = "../sounds/beeping.mp3";
    siren.src = "../sounds/siren.mp3";
    bells.src = "../sounds/bells.mp3";
    Fart.src = "../sounds/Fart.mp3";
    No.src = "../sounds/No.mp3";
    EvilLaugh.src = "../sounds/EvilLaugh.mp3";
    InceptionButton.src = "../sounds/InceptionButton.mp3";
    FinishHim.src = "../sounds/FinishHim.mp3";
    Dolphin.src = "../sounds/Dolphin.mp3";
    SadTrombone.src = "../sounds/SadTrombone.mp3";
    ItTimeToStop.src = "../sounds/ItTimeToStop.mp3";
    Hallelujah.src = "../sounds/Hallelujah.mp3";
    Haha.src = "../sounds/Haha.mp3";
    Yes.src = "../sounds/Yes.mp3";
    IBelieveICanFly.src = "../sounds/IBelieveICanFly.mp3";
    Crickets.src = "../sounds/Crickets.mp3";
    YouShallNotPass.src = "../sounds/YouShallNotPass.mp3";

    var allSoundsList = [fallingRain, forestMorning, burningLogs, whiteNoise, CatMeowing, BeautifulChillMix,
    Ambulance, FrogCroak, OceanWave, AirPlane, Bee, PublicSwimmingPool, Fan, LaughingAndGigglingKids,
    PunchesAndSlaps, ScaryFootsteps, DogBarking, JungleBattleAmbience, foghorn, beeping, siren,
    bells, Fart, No, EvilLaugh, InceptionButton, FinishHim, Dolphin, SadTrombone, ItTimeToStop,
    Hallelujah, Haha, Yes, IBelieveICanFly, Crickets, YouShallNotPass, CityStreet, Spaceship, NightWildlife, Piano, ShoppingMall, MiiPlaza];
    

    function playSavedSoundscape(){
      var soundscape = localStorage.getItem("soundscape");
      console.log (soundscape);
      soundEffect(soundscape);
    }
    function playSavedAlarm(){
      var alarmSound = localStorage.getItem("alarm");
      console.log (alarmSound);
      soundEffect(alarmSound);
    }
    function soundEffect(num)
    {
      // if audio is playing, pause it first
      if (!fallingRain.paused || !forestMorning.paused || !burningLogs.paused || !whiteNoise.paused || 
        !CatMeowing.paused || !BeautifulChillMix.paused || !Ambulance.paused || !FrogCroak.paused || 
        !OceanWave.paused || !AirPlane.paused || !Bee.paused || !PublicSwimmingPool.paused || !Fan.paused || 
        !LaughingAndGigglingKids.paused || !PunchesAndSlaps.paused || !ScaryFootsteps.paused || 
        !DogBarking.paused || !JungleBattleAmbience.paused || !foghorn.paused || !beeping.paused || 
        !siren.paused || !bells.paused || !Fart.paused || !No.paused || !EvilLaugh.paused || 
        !InceptionButton.paused || !FinishHim.paused || !Dolphin.paused || !SadTrombone.paused || 
        !ItTimeToStop.paused || !Hallelujah.paused || !Haha.paused || !Yes.paused || !IBelieveICanFly.paused || 
        !Crickets.paused || !YouShallNotPass.paused || !CityStreet.paused || !Spaceship.paused || 
        !NightWildlife.paused || !Piano.paused || !ShoppingMall.paused || !MiiPlaza.paused) {
        for (i = 0; i < allSoundsList.length; i++) { 
          var sound = allSoundsList[i];
          sound.pause();
        }
        console.log ("paused");
      }
	  // Save the soundscape or alarm selection
	  if(num >= 1 && num <= 18){
      localStorage.setItem("soundscape", num);
    }
    else{
      localStorage.setItem("alarm", num);
    }
	  // Set the volume for alerts
	  var alertVol = sessionStorage.getItem("alertVolume");
	  if(alertVol == null){
      alertVol = 1.0;
    }
      //play the song is clicked
      if (num == 1) {
        fallingRain.loop = true;
        fallingRain.play();
      }
      else if (num == 2) {
        forestMorning.loop = true;
        forestMorning.play();
      }
      else if (num == 3){
        burningLogs.loop = true;
        burningLogs.play();
      }
      else if(num == 4){
        whiteNoise.loop = true;
        whiteNoise.play();
      }
      else if(num == 5){
        CatMeowing.loop = true;
        CatMeowing.play();
      }
      else if(num == 6){
        BeautifulChillMix.loop = true;
        BeautifulChillMix.play();
      }
      else if(num == 7){
        CityStreet.loop = true;
        CityStreet.play();
      }
      else if(num == 8){
        Spaceship.loop = true;
        Spaceship.play();
      }
      else if(num == 9){
        OceanWave.loop = true;
        OceanWave.play();
      }
      else if(num == 10){
        AirPlane.loop = true;
        AirPlane.play();
      }
      else if(num == 11){
        NightWildlife.loop = true;
        NightWildlife.play();
      }
      else if(num == 12){
        PublicSwimmingPool.loop = true;
        PublicSwimmingPool.play();
      }
      else if(num == 13){
        Fan.loop = true;
        Fan.play();
      }
      else if(num == 14){
        Piano.loop = true;
        Piano.play();
      }
      else if(num == 15){
        PunchesAndSlaps.loop = true;
        PunchesAndSlaps.play();
      }
      else if(num == 16){
        ShoppingMall.loop = true;
        ShoppingMall.play();
      }
      else if(num == 17){
        MiiPlaza.loop = true;
        MiiPlaza.play();
      }
      else if(num == 18){
        JungleBattleAmbience.loop = true;
        JungleBattleAmbience.play();
      }
      else if(num == 19){
        foghorn.volume = alertVol;
        foghorn.play();
      }
      else if(num == 20){
        beeping.volume = alertVol;
        beeping.play();
      }
      else if(num == 21){
        siren.volume = alertVol;
        siren.play();
      }
      else if(num == 22){
        bells.volume = alertVol;
        bells.play();
      }
      else if(num == 23){
        Fart.volume = alertVol;
        Fart.play();
      }
      else if(num == 24){
        No.volume = alertVol;
        No.play();
      }
      else if(num == 25){
        EvilLaugh.volume = alertVol;
        EvilLaugh.play();
      }
      else if(num == 26){
        InceptionButton.volume = alertVol;
        InceptionButton.play();
      }
      else if(num == 27){
        FinishHim.volume = alertVol;
        FinishHim.play();
      }
      else if(num == 28){
        Dolphin.volume = alertVol;
        Dolphin.play();
      }
      else if(num == 29){
        SadTrombone.volume = alertVol;
        SadTrombone.play();
      }
      else if(num == 30){
        ItTimeToStop.volume = alertVol;
        ItTimeToStop.play();
      }
      else if(num == 31){
        Hallelujah.volume = alertVol;
        Hallelujah.play();
      }
      else if(num == 32){
        Haha.volume = alertVol;
        Haha.play();
      }
      else if(num == 33){
        Yes.volume = alertVol;
        Yes.play();
      }
      else if(num == 34){
        IBelieveICanFly.volume = alertVol;
        IBelieveICanFly.play();
      }
      else if(num == 35){
        Crickets.volume = alertVol;
        Crickets.play();
      }
      else if(num == 36){
        YouShallNotPass.volume = alertVol;
        YouShallNotPass.play();
      }

    }


// pause sounds
$('.pause').click (function() {
  if ($('.pause').text() == 'Pause Sound') {
    for (i = 0; i < allSoundsList.length; i++) { 
      var sound = allSoundsList[i];
      sound.pause();
    }
    $('.pause').text('Resume Playing');
  } else {
   playSavedSoundscape();
   $('.pause').text('Pause Sound');
 }
});



