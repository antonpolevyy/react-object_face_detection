
//  TESTING LOAD TIME
var timerStart = Date.now();

window.addEventListener("load", function () {
    console.log("Time until everything loaded: ", Date.now()-timerStart);
});

document.addEventListener("ready", function () {
    console.log("Time until DOMreadyd: ", Date.now()-timerStart);
});


/////////////////////////////////////////////////////////////////////////
//   //   //   //  //  CREATIVE MODEL SETUP  //   //   //   //   //   //
///////////////////////////////////////////////////////////////////////

var creative = {};

creative.init = function () {
  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,
        creative.enablerInitHandler);
    }
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT,
        creative.enablerInitHandler);
  }
};



creative.enablerInitHandler = function (event) {
  creative.dynamicDataAvailable();

    // BG set as clickthrough need to apply to hitbox
  creative.domElements.hitBox.addEventListener('click', creative.exitClickHandler, false);
  creative.domElements.hitBox.addEventListener('mouseover', creative.overClickHandler);
  creative.domElements.hitBox.addEventListener('mouseout', creative.outClickHandler);
  creative.SetUpButtonStyle();

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler);
  };
};


//////////////////////////////
//////////////////////////////

/////////////////////////////////////////////////////////////////////////
//   //   //   //  //   DYNAMIC DATA SETUP   //   //   //   //   //   //
///////////////////////////////////////////////////////////////////////

creative.setupDOMElements = function () {
  creative.domElements = {};
  creative.domElements.Hero = document.getElementById('hero');
  creative.domElements.Message_1 = document.getElementById('Message-1');
  creative.domElements.Message_2 = document.getElementById('Message-2');
  creative.domElements.Message_3 = document.getElementById('Message-3');
  creative.domElements.Legal = document.getElementById('tnc');
  creative.domElements.ctaCopy = document.getElementById('ctaCopy');
  creative.domElements.cta_button = document.getElementById('cta_button');
  creative.domElements.hitBox = document.getElementById('hitBox');
  creative.domElements.logo = document.getElementById('Logo');

  // new disclaimer elements
  creative.domElements.disclaimer = document.getElementById('disclaimer');
};

creative.isBlank = function( data ) {
    return ( $.trim(data).length == 0 );
}

creative.dynamicDataAvailable = function () {

// NOTE: Here starts the pasted section from Studio.
// Dynamic Content variables and sample values
    Enabler.setProfileId(10007417);
    var devDynamicContent = {};
    devDynamicContent.EA_Database_728x90= [{}];
    devDynamicContent.EA_Database_728x90[0]._id = 0;
    devDynamicContent.EA_Database_728x90[0].Unique_ID = 1;
    devDynamicContent.EA_Database_728x90[0].Reporting_Label = "VIC|PRO";
    devDynamicContent.EA_Database_728x90[0].Advert_Info = "Carbon Neutral + Discounts + $100 credit";
    devDynamicContent.EA_Database_728x90[0].Hero_Image_URL = {};
    devDynamicContent.EA_Database_728x90[0].Hero_Image_URL.Type = "file";
    devDynamicContent.EA_Database_728x90[0].Hero_Image_URL.Url = "images/hero_default.jpg";
    devDynamicContent.EA_Database_728x90[0].Hero_Image_Hold_Time = 2.0;
    devDynamicContent.EA_Database_728x90[0].Desktop_Legal_Copy = "*Ut enim minimas veniam, 65 nostrum exercitationem ullam corporis";
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_1_Copy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 75% do eiusmod tem";
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_1_Copy_Active = true;
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_1_Legal_Active = true;
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_1_Hold_Time = 2.5;
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_2_Copy = "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolors 75%";
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_2_Copy_Active = true;
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_2_Legal_Active = true;
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_2_Hold_Time = 2.5;
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_3_Copy = "75% EnergyAustralia sint occaecat cupidatat non proident, sunt in culpa qu";
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_3_Copy_Active = true;
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_3_Legal_Active = true;
    devDynamicContent.EA_Database_728x90[0].Desktop_Message_3_Hold_Time = 2.5;
    devDynamicContent.EA_Database_728x90[0].Desktop_CTA_Copy = "Natus error sit";
    devDynamicContent.EA_Database_728x90[0].Desktop_CTA_Style = "CRIMSON";
    devDynamicContent.EA_Database_728x90[0].Mobile_Legal_Copy = "";
    devDynamicContent.EA_Database_728x90[0].Mobile_Legal_Active = false;
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_1_Copy = "";
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_1_Copy_Active = false;
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_1_Hold_Time = 2.5;
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_2_Copy = "Get 33% off electricity usage rates & up to $100 credit";
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_2_Copy_Active = false;
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_2_Hold_Time = 2.5;
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_3_Copy = "";
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_3_Copy_Active = false;
    devDynamicContent.EA_Database_728x90[0].Mobile_Message_3_Hold_Time = "";
    devDynamicContent.EA_Database_728x90[0].Mobile_CTA_Copy = "";
    devDynamicContent.EA_Database_728x90[0].Mobile_CTA_Style = "";
    devDynamicContent.EA_Database_728x90[0].Logo_Image_URL = {};
    devDynamicContent.EA_Database_728x90[0].Logo_Image_URL.Type = "file";
    devDynamicContent.EA_Database_728x90[0].Logo_Image_URL.Url = "images/logo.png";
    devDynamicContent.EA_Database_728x90[0].Exit_URL = {};
    devDynamicContent.EA_Database_728x90[0].Exit_URL.Url = "https://www.energyaustralia.com.au/residential/electricity-and-gas/plans?cid=ret|dis|%ebuy!|%esid!|pros|vic";
    devDynamicContent.EA_Database_728x90[0].Default = true;
    devDynamicContent.EA_Database_728x90[0].Active = true;
    Enabler.setDevDynamicContent(devDynamicContent);

    // NOTE: Here ends the pasted section from Studio.

    // Variable "dynamicContent" gets automatically initialized by Enabler.
    // Change "Travel_Packaged_Solutions_AB" to the name of your dynamic elements.
    creative.dynamicData = dynamicContent.EA_Database_728x90[0];

    // Set your dynamic exit url so it can be used in initial.js.
    creative.dynamicExitUrl = creative.dynamicData.Exit_URL.Url;

    //pull text
    creative.domElements.Message_1.innerHTML = creative.dynamicData.Desktop_Message_1_Copy;
    creative.domElements.Message_2.innerHTML = creative.dynamicData.Desktop_Message_2_Copy;
    creative.domElements.Message_3.innerHTML = creative.dynamicData.Desktop_Message_3_Copy;
    // creative.domElements.Legal.innerHTML = creative.dynamicData.Desktop_Legal_Copy;
    creative.domElements.ctaCopy.innerHTML = creative.dynamicData.Desktop_CTA_Copy;
    creative.domElements.Hero.src = creative.dynamicData.Hero_Image_URL.Url;
    creative.domElements.logo.src = creative.dynamicData.Logo_Image_URL.Url;

    // ------------------------------------------------------------------------------------
    // ### new disclaimer hack ###
    // ------------------------------------------------------------------------------------

    // check for new divider chars to allow for backwards compatibility
    var legalCopy = creative.dynamicData.Desktop_Legal_Copy;

    // split copies
    var split = legalCopy.split("||");

    // set the disclaimer texts
    creative.domElements.Legal.innerHTML = split[0] || "";
    creative.domElements.disclaimer.innerHTML = split[1] || "";

    // ------------------------------------------------------------------------------------

};



//////////////////////////////
//////////////////////////////



/////////////////////////////////////////////////////////////////////////
//   //   //   //  //     CLICK HANDLERS     //   //   //   //   //   //
///////////////////////////////////////////////////////////////////////


creative.exitClickHandler = function (event) {
    Enabler.exitOverride('Dynamic Exit', creative.dynamicExitUrl);
};

creative.overClickHandler = function (event) {
    TweenMax.to(cta_button, 0.1, {scale:1.05, color:"#f00"});
};

creative.outClickHandler = function (event) {
    TweenMax.to(cta_button, 0.1, {scale:1, color:"#ffffff"});
};


creative.pageLoadHandler = function (event) {
    //creative.domElements.background.src = creative.dynamicData.Hero_Image_URL.Url;
    //creative.domElements.cta.style.visibility = 'visible';
    console.log("Enabler: loaded");
    creative.showAd();
};


//////////////////////////////
//////////////////////////////

/////////////////////////////////////////////////////////////////////////
//   //   //   //  //BUTTON STYLE CONTROLLERS//   //   //   //   //   //
///////////////////////////////////////////////////////////////////////

creative.SetUpButtonStyle = function () {
    console.log("Set up button style");
    var TheCTAStyle = creative.dynamicData.Desktop_CTA_Style;
    console.log("Button style is set as" + TheCTAStyle);
    console.log("DEFAULT CRIMSON (cerise) CTA");
    $('#cta_button').css('background-image', "url(images/cta-cerise.png)");

    if (TheCTAStyle == "BLUE") {
        console.log("BLUE (navy) CTA");
        $('#cta_button').css('background-image', "url(images/cta-navy.png)");
    }

    else if (TheCTAStyle == "TEAL") {
        console.log("TEAL (genoa) cta");
        $('#cta_button').css('background-image', "url(images/cta-genoa.png)");
    }

    else if (TheCTAStyle == "DGREEN") {
        console.log("DARK GREEN (british racing green) CTA");
        $('#cta_button').css('background-image', "url(images/cta-racing.png)");
    }

    else if (TheCTAStyle == "LGREEN") {
        console.log("LIGHT GREEN (salem) CTA");
        $('#cta_button').css('background-image', "url(images/cta-salem.png)");
    }

    else if (TheCTAStyle == "PURPLE") {
        console.log("PURPLE (chetwode) CTA");
        $('#cta_button').css('background-image', "url(images/cta-chetwode.png)");
    }
}

creative.LightCTAcopy = function () {
        document.getElementById("ctaCopy").style.color = "#ffffff";
}

creative.DarkCTAcopy = function () {
        document.getElementById("ctaCopy").style.color = "#333333";
}

/////////////////////////////////////////////////////////////////////////
//   //   //   //  //END BUTTON STYLE CONTROLLERS//    //   //   //   //
///////////////////////////////////////////////////////////////////////


//  SETUP VARIABLES

//  SETUP ELEMENTS
var $el = {};



// Is triggered when the background image in polite.js was fully loaded.
creative.showAd = function () {

  document.getElementById('content').className = "show";
  document.getElementById('loader').className = "hide";


           // var TheEventStartDate = creative.dynamicData.Event_Start_Date;
           // var TheEventEndDate = creative.dynamicData.Event_End_Date;

          //  console.log(TheEventStartDate);
          //  console.log(TheEventEndDate);

    // if (TheEventStartDate == TheEventEndDate) {
           // console.log("dates are equal");

          //$('#toText').css('visibility', 'hidden');
          //$('#eventEndDateText').css('visibility', 'hidden');

     // }
            console.log("Begin ad - animating");

            $el.bannerWrapper = $("#content"),

            $el.hero = $("#hero"),

            $el.tnc = $("#tnc"),

            $el.allMessages = $('.message-text');

            $el.message_1 = $("#Message-1"),
            $el.message_2 = $("#Message-2"),
            $el.message_3 = $("#Message-3"),

            Gradient = $("#Gradient"),
            GradientCompanion = $("#GradientCompanion"),
            Footer = $("#Footer"),
            cta_button = $("#cta_button"),
            Logo = $("#Logo"),

            blacking = $("#blacking"),
            loader = $("#loader"),

            Message1Active = creative.dynamicData.Desktop_Message_1_Copy_Active;
            Message2Active = creative.dynamicData.Desktop_Message_2_Copy_Active;
            Message3Active = creative.dynamicData.Desktop_Message_3_Copy_Active;

            LegalMessage1Active = creative.dynamicData.Desktop_Message_1_Legal_Active;
            LegalMessage2Active = creative.dynamicData.Desktop_Message_2_Legal_Active;
            LegalMessage3Active = creative.dynamicData.Desktop_Message_3_Legal_Active;

                // hide deactivated elements
                if (Message1Active === false) {
                    $('#Message_1').css('visibility', 'hidden');
                }
                if (Message2Active === false) {
                    $('#Message_2').css('visibility', 'hidden');
                }
                if (Message3Active === false) {
                    $('#Message_3').css('visibility', 'hidden');
                }
                if (LegalMessage1Active === false && LegalMessage2Active === false && LegalMessage3Active === false) {
                    $('#Legal').css('visibility', 'hidden');
                }


            //  TIMELINE ESSENTIAL ELEMENTS
            creative.Timeline_HeroIn();
            creative.Timeline_GradientIn();

            //  TIMELINE OPTIONAL ELEMENTS
            if (Message1Active == true) {
                creative.Timeline_Message1In();
            };

            if (Message2Active == true) {
                creative.Timeline_Message2In();
            };

            if (Message3Active == true) {
                creative.Timeline_Message3In();
            };

};

//  ANIMATION TIMES
var timing = {};
    timing.heroIn = 0.5;

    timing.messageIn = 0.5;
    timing.messageOut = 0.5;



creative.Timeline_HeroIn = function () {
    console.log("Timeline_HeroIn");

    tl = new TimelineMax({repeat:0, repeatDelay:0, yoyo:false});
    tl.to([$el.bannerWrapper], timing.heroIn, {opacity:1});
};

// creative.Timeline_GradientIn = function () {
//     tl
//     .from(Gradient, 2.5, {rotation: 180, transformOrigin: '100% 207px', scale:0.1, alpha:0.0, ease: Power4.easeOut}, "+="+creative.dynamicData.Hero_Image_Hold_Time)
//     .from(GradientCompanion, 2.2, {rotation: 220, transformOrigin: '677px 0%', alpha:0.0, ease: Power4.easeOut}, "-=2")
//     ;
// };

// -------------------------------------------------------------------------------------------------------------------
//
// gradient waviness hackery
//
// -------------------------------------------------------------------------------------------------------------------

creative.Timeline_GradientIn = function () {

    //
    // making objects to pass to nested timelines on complete

    // large gradient values
    var gradParams = { distance: -2, speed: 2, delay: 0, origin: '100% 207px', fromRot: 180, fromY: 0 }

    // smaller gradient
    var gradCompParams = { distance: -1, speed: 1.6, delay: 0.25, origin: '677px 0%', fromRot: 220, fromY: 0 }

    // timeline
    tl
    // converted from 'from' to 'fromto' so they end halfway through their looping wave anims
    .fromTo(Gradient, 2.5, {rotation: gradParams.fromRot, transformOrigin: gradParams.origin, scale:0.1, alpha:0.0, y:gradParams.fromY}, {rotation: gradParams.distance, scale:1, alpha:1, y:0, ease: Power4.easeOut, onComplete: creative.loopGradient, onCompleteParams: [Gradient, gradParams]}, "+="+creative.dynamicData.Hero_Image_Hold_Time)
    .fromTo(GradientCompanion, 2.2, {rotation: gradCompParams.fromRot, transformOrigin: gradCompParams.origin, alpha:0.0, y:gradCompParams.fromY}, {rotation: gradCompParams.distance, alpha:1, ease: Power4.easeOut, onComplete: creative.loopGradient, onCompleteParams: [GradientCompanion, gradCompParams]}, "-=2")
    ;
};

creative.loopGradient = function(element, params) {

    var ntl = new TimelineMax({repeat:-1, repeatDelay: params.delay});

    // starts from halfway through the anim so swapped them around:

    // left-swing, happens first now
    ntl.to(element, params.speed, {rotation: 0.5 * params.distance, transformOrigin: params.origin, ease: Power1.easeIn });
    ntl.to(element, params.speed, {rotation: 0, transformOrigin: params.origin, ease: Power1.easeOut });

    // right-swing, already done coz this function is called mid-swing
    ntl.to(element, params.speed, {rotation: 0.5 * params.distance, transformOrigin: params.origin, ease: Power1.easeIn });
    ntl.to(element, params.speed, {rotation: params.distance, transformOrigin: params.origin, ease: Power1.easeOut });
}

// -------------------------------------------------------------------------------------------------------------------


creative.Timeline_Message1In = function () {

    //
    // disclaimer hackery
    //
    var isMessage = Message1Active == true;
    var isLegal = LegalMessage1Active == true;
    var isBlank = creative.isBlank($el.message_1.text());

    // show/hide frame legal
    if (isMessage && isBlank) {
        var theseElements = [creative.domElements.disclaimer];
    }
    else if (isLegal) {
        console.log("Timeline_Message1In Including TNC");
        var theseElements = [$el.tnc, $el.message_1];
    } else {
        console.log("Timeline_Message1In Excluding TNC");
        var theseElements = [$el.message_1];
    };

    tl.to(
        theseElements,
        timing.messageIn,
        {opacity:1},
        "-=1.5"
        );
    tl.to(
        theseElements,
        timing.messageIn,
        {opacity:1},
        "+="+creative.dynamicData.Desktop_Message_1_Hold_Time
        );
};


creative.Timeline_Message2In = function () {

    //
    // disclaimer hackery
    //
    var isMessage = Message2Active == true;
    var isLegal = LegalMessage2Active == true;
    var isBlank = creative.isBlank($el.message_2.text());

    // show/hide frame legal
    if (isMessage && isBlank) {
        tl.to(
            [$el.tnc, $el.allMessages, creative.domElements.disclaimer],
            timing.messageIn,
            {opacity:0}
        );

        var theseElements = [creative.domElements.disclaimer];
    }
    else if (isLegal) {
        console.log("Timeline_Message2In Including TNC");

        //  ANIMATE PREVIOUS FRAME MESSAGE OUT ONLY
        tl.to(
            [$el.allMessages, creative.domElements.disclaimer],
            timing.messageIn,
            {opacity:0}
        );

        var theseElements = [$el.tnc, $el.message_2];

    } else {
        console.log("Timeline_Message2In Excluding TNC");

        //  ANIMATE PREVIOUS FRAME MESSAGE & TNC
        tl.to(
            [$el.tnc, $el.allMessages, creative.domElements.disclaimer],
            timing.messageIn,
            {opacity:0}
        );

        var theseElements = [$el.message_2];
    };

    //  ANIMATE FRAME IN
    tl.to(
        theseElements,
        timing.messageIn,
        { opacity: 1 }
        );

    //  HOLD
    tl.to(
        theseElements,
        timing.messageIn,
        {opacity:1},
        "+="+creative.dynamicData.Desktop_Message_2_Hold_Time
        );
};


creative.Timeline_Message3In = function () {

    //
    // disclaimer hackery
    //
    var isMessage = Message3Active == true;
    var isLegal = LegalMessage3Active == true;
    var isBlank = creative.isBlank($el.message_3.text());

    // show/hide frame legal
    if (isMessage && isBlank) {
        tl.to(
            [$el.tnc, $el.allMessages, creative.domElements.disclaimer],
            timing.messageIn,
            {opacity:0}
        );

        var theseElements = [creative.domElements.disclaimer];
    }
    else if (isLegal) {
        console.log("Timeline_Message3In Including TNC");

        //  ANIMATE PREVIOUS FRAME MESSAGE OUT ONLY
        tl.to(
            [$el.allMessages, creative.domElements.disclaimer],
            timing.messageIn,
            {opacity:0}
        );

        var theseElements = [$el.tnc, $el.message_3];

    } else {
        console.log("Timeline_Message3In Excluding TNC");

        //  ANIMATE PREVIOUS FRAME MESSAGE & TNC
        tl.to(
            [$el.tnc, $el.allMessages, creative.domElements.disclaimer],
            timing.messageIn,
            {opacity:0}
        );

        var theseElements = [$el.message_3];
    };

    //  ANIMATE FRAME IN
    tl.to(
        theseElements,
        timing.messageIn,
        { opacity: 1 }
        );

    //  HOLD
    tl.to(
        theseElements,
        timing.messageIn,
        {opacity:1},
        "+="+creative.dynamicData.Desktop_Message_3_Hold_Time
        );
};


// Start creative once all elements in window are loaded.
window.addEventListener('load', creative.init.bind(creative));
