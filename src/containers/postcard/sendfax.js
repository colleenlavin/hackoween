var request = require('request');
var twilio = require('twilio');
var accountSid = 'AC17d71c4839faeab18311ccb9e1d7b882'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
const client = require('twilio')(accountSid, authToken);

client.fax.v1.faxes
  .create({
      to: '+16192367215',
      from:  '+17088872664',
      mediaUrl: 'https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf'
  }).then(function(response) {
    console.log(response.sid);
  }).catch((err) => {
    console.log(err)
  });

