define([ 
    "backbone" 
], function(
    Backbone
) {
  var AudioVideo = Backbone.Model.extend(
  /** @lends AudioVideo.prototype */
  {
    /**
     * @class AudioVideo models allows a user to add audio and video files.
     * 
     * @description Initialize function
     * 
     * @extends Backbone.Model
     * 
     * @constructs
     */
    initialize : function() {
    },
    
    defaults : {
      URL : "",
//      filename : "",
      type: "audio" //or video
    },
    
    // Internal models: used by the parse function
    internalModels : {
      // There are no nested models
    },
    saveAndInterConnectInApp : function(callback){
      
      if(typeof callback == "function"){
        callback();
      }
    }
  });

  return AudioVideo;
});