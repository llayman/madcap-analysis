/**
 * This service provides a loading overlay when necessary. It uses the ngDialog module to do this.
 */
angular.module('madcap-analysis')
.factory('loading_overlay', function(){
	  "use strict";
	  	  
	  return {
		/**
		 * Creates an dialog with a loading spinner and custom message.
		 * @return the dialog, so that it can be closed in the controller
		 */
        createLoadOverlay : function(message, passedCon, anchor) {
        	var anchorElement = document.getElementById(anchor);
        	var width = anchorElement.offsetWidth;	
        	var height = anchorElement.offsetHeight;
        	var dialog = $('<div class="well well-sg opacityscarf" style="width:'
        		+width+'px; height:'
        		+height+'px;"><div id="loadoverlayspinner" class="innerloader" style="display: block; margin-left: auto; margin-right: auto;"></div><h2 id="loadoverlaymessage" style="text-align: center;"></h2>');
        	dialog.appendTo(anchorElement);
        	var messageGui = document.getElementById('loadoverlaymessage');
        	var spinner = document.getElementById('loadoverlayspinner');
        	spinner.style['margin-top'] = Math.floor((height-spinner.offsetHeight-70)/2) + "px";
        	messageGui.innerHTML = message;
        	return dialog;
        }
    };
}
);