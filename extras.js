// EXTRA FUNCTIONS


function getHighestPrice(ex1, ex2, ex3) {

}




//       case 'text to speech':
//       nuance.sendTTSRequest({
//     "text": "hello world", //The text you would like to convert to speech.
//     "output": "testFile.wav", //The output file.
//     "outputFormat": "wav", //The codec you would like to use.
//     "language": "en_US", //The language code (please refer to Nuance's documentation for more info).
//     "voice": "Tom", //The voice you would like to use (please refer to Nuance's documentation for more info).
//     "identifier": "randomIdentifierStringHere", //The user identifier (please refer to Nuance's documentation for more info).
//     "success": function(){ //The success callback function.
//         console.log("The file was saved.");
//     },
//     "error": function(response){ //The error callback function - returns the response from Nuance that you can debug.
//         console.log("An error was occurred");
//         console.log(response);
//     }
// });
// break;


// case 'image':
//   sendImageMessage(senderID);
//   break;
// case 'gif':
//   sendGifMessage(senderID);
//   break;
// case 'video':
//   sendVideoMessage(senderID);
//   break;
//
// case 'file':
//   sendFileMessage(senderID);
//   break;
//
// case 'button':
//   sendButtonMessage(senderID);
//   break;
//
// case 'generic':
//   sendGenericMessage(senderID);
//   break;
//
// case 'receipt':
//   sendReceiptMessage(senderID);
//   break;
//
// case 'quick reply':
//   sendQuickReply(senderID);
//   break;
//
// case 'read receipt':
//   sendReadReceipt(senderID);
//   break;
//
// case 'typing on':
//   sendTypingOn(senderID);
//   break;
//
// case 'typing off':
//   sendTypingOff(senderID);
//   break;
//
// case 'account linking':
//   sendAccountLinking(senderID);
//   break;
// case 'bit buttons':
//   sendButtonMessage(senderID);
//   break;



//   google_speech.ASR({
//     developer_key: 'AIzaSyC_WVvBbOUxcn76AgjFfjGJdeyIw7RsqOs',
//     file: 'https://cdn.fbsbx.com/v/t59.3654-21/15659141_10212710443139227_531252545021018112_n.mp4/audioclip-1487359152000-2396.mp4?oh=afd4180b0e8da076250c3925b17e1469&oe=58A8EAF3',
//   }, function(err, httpResponse, xml){
//     if(err){
//       console.log('ERROR IN ASR')
//       console.log(err);
//     }else{
//       console.log('NO ERROR IN ASR')
//       console.log(httpResponse.statusCode, xml)
//     }
//   }
// );



///// CUSTOM
// function sendCorrectMsg(recipientId, msg, incorrectText) {
//   var messageData = {
//     recipient: {
//       id: recipientId
//     },
//     sender: {
//       id: 'dummy'
//     },
//     originalText: {
//       text: incorrectText
//     },
//     correctText: {
//       correct: msg
//     },
//     timestamp: 'nothing',
//     message: {
//       attachment: {
//         type: "template",
//         payload: {
//           template_type: "button",
//           text: "Did you mean... " + msg + "?",
//           buttons:[{
//             type: "postback",
//             title: "Yes",
//             payload: "yes"
//           }, {
//             type: "postback",
//             title: "No",
//             payload: "no"
//           }]
//         }
//       }
//     }
//   }
//   gettingFrisky(messageData);
// }
// //// CUSTOM



// // ANOTHER CUSTOM FUNCTION THAT REPLICATES RECEIVED Postback
// /// CUSTOM TRYNA MAKE SOME CHANGES SO IT CAN FREAKING SYNC
//
// function gettingFrisky(event) {
//
//   if(event.originalText.text) {
//     var incorrectText = event.originalText.text;
//     var correctText = event.correctText.correct;
//     if(event.message.attachment.payload. === "yes") {
//       var msg = {
//         recipient: {
//           id: recipientID
//         },
//         message: {
//           text: correctText,
//           metadata: "DEVELOPER_DEFINED_METADATA"
//         }
//       }
//       receivedMessage(msg)
//     } else if (payload === "no") {
//       sendTextMessage(senderID, "Sorry, I could not recognize the command " + "'" + incorrectText + "'.");
//     }
//   }
// /// CUSTOM HAHAHA
// }
