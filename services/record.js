
"use strict";

// Imports dependencies
const Response = require("./response"),
  config = require("./config"),
  i18n = require("../i18n.config"),
  fetch = require("node-fetch");
  

module.exports = class Record {
  constructor(user, webhookEvent, placeData) {
    this.user = user;
    this.webhookEvent = webhookEvent;
    this.placeData = placeData;
  }


  handlePayload(payload){

    console.log(this.placeData);
    let response;
    
    let parseInfo = function(payload){
      let parsed = JSON.parse(payload); // this is how you parse a string into JSON 
      console.log("++++++STEP6B:",parsed);
      return parsed;
    }
   
    let message = this.webhookEvent.message.text.trim().toLowerCase();

    //Check Business G-Places type
    let checkType = (a, toCheck)=>{
      let f = a.find(e => e === toCheck);
      return f == toCheck;
    };

    //1. READY Define location and acquire place ID (READY)
        //1.2 READY A new component called 'record' that handle the SWITCH statement a little different.(it unpacks payload, extract action)
        //2. 'QuickReply' displays the option for : REVIEW | SHOW ACCESSIBILITY (carry ID)
        //2.1 Create logic to choose between 3 possible Accessibility Reports: Ramp, Braile, Restroom (QuickReply) (carry ID)
        //2.2 Choose if True or False (QuickReply) (carry ID)
        //3. Selection will trigger payload record.handlePayload() and will receive the stringified Payload
        //4. After unpacking stringified payload, select Action (REPORT)
        //5. Extract Name, id, and thing to report and trigger mutation.
        //6. Get Callback (or await) for it and show final message "Your info was recorded", show initial Menu
        

    switch (payload) {

      case "RECORD_LIST":

          console.log("++++RECORD_LIST");
          response = [
            Response.genText("LIST Queried"),
          ]
          
        //action:"list"
        //placeId: 123

      break;

      
      default: 

          console.log("++++RECORD_DEFAULT");
       
          response = [ 
            Response.genQuickReply("This is Record Default", [
              {
                title:"General",
                payload: "LOCATION_CHOSEN"
              },
              {
                title:"Accessibility",
                payload: "LOCATION_AMENITIES"
              },
              {
                title:"Photos",
                payload: "LOCATION_GALLERY"
              },
              {
                title:"X",
                payload: "LOCATION_CLEAR"
              }
            ])
          ]

        
      break;
        
      
    }

    return response;
  }
};
