// Add sockets to send message acros tabs/clients

let chatMessage = ""

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
  // console.log("lead email: ", req.body.lead_email);
  // sendMessage(req.body.lead_email)
  
  // res.redirect('/');
  // res.render('landing', {title:'Express', message:appendMessage(req.body.lead_email)})
}

// const sendMessage = function(message){
//   console.log("Sending "+message)
// }

// const appendMessage = function(new_message){
//   chatMessage = chatMessage+"\n"+new_message
//   return chatMessage
// }





