/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return {
    type: "Goldfish",
    brand: "Pepperidge Farm",
    flavor: "Cheddar",
    count: 2000
  }; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances. In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* lastReceivedMessage() - returns the message text of the last message the user
* received.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent 
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog (user, sentArr, recdArr, currIndex, max, logMessage,
					lastReceivedMesage, getSentMessage, totalSent, totalReceived) {
  this.user = user; //string
								
  this.sentArr = new Array();	//maximum of 5 received messages kept
  this.sentArr.length = 0;
  this.recdArr = new Array();	//Can exceed 5 elements, in which case 
								//  the length would increase by the 
								//  number of elements added.
  this.recdArr.length = 0;
  this.currIndex = 0;
  this.max = 5;
  
  //debug
  //if (currIndex) alert("okay");
  
  this.logMessage = function(messageText, direction/*number sent 0 or received 1*/) {
    if (direction == 0)
	  this.sentArr.push(messageText);	//push string of message sent
	if (direction == 1)
	{
	  if (this.recdArr.length <= this.max)
	  {
	    this.recdArr.push(messageText);	//push string of message received
	//or use shift() to remove first element of an array
	  }
	}
  };
  
  this.lastReceivedMessage = function() {
    return this.recdArr[this.recdArr.length-1];	//check to make sure subtracting 1 from length is correct
  };
  
  this.getSentMessage = function(n) {	//nth most recently sent message
    return this.sentArr[n];
  };
  this.totalSent = function() {
    return this.sentArr.length;	//check to make sure length is correct
  };
  this.totalReceived = function() {
    return this.recdArr.length;	//check to make sure length is correct
  };
}
//end your code

/**
* Add a method to the MessageLog prototype called systemReceived().
* This method should return the total number of messages received for all
* instances of message logs. So if you have logs A and B, A has received
* 3 messages, B has received 8. systemReceived() should return 11. You
* may need to do more than simply add a method to make this functionality
* work.
*/
//your code here
/**
* Note: receives an array of MessageLog objects
*
*/
MessageLog.prototype.systemReceived = function(logs) {
  var messageCount = 0;
  
  for(var i = 0; i < logs.length; i++) {
    messageCount += logs[i].recdArr.length;
  }
  return messageCount;
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
*/

//your code here
var msgLog = new MessageLog("BlackHatGuy");
msgLog.logMessage( "foo", 1 );
msgLog.logMessage( "bar", 1 );
msgLog.logMessage( "baz", 1 );

/*
var msgLogArr = new Array();
msgLogArr.push( new MessageLog("BlackHatGuy") );
msgLogArr[0].logMessage( "foo", 1 );
msgLogArr[0].logMessage( "bar", 1 );
msgLogArr[0].logMessage( "baz", 1 );
*/
//end your code
