exports.index = function(req, res, next) {
  res.render('index', { about: 'Welcome to our zoo!' , animal_name:
 'Zoo Animals'});
}

exports.zoom = function(req, res, next) {
  res.render('zoom', {about:'Zoom Time'});
}

exports.zoo = function(req, res, next) {
   res.render('index', { about: 'Welcome to our zoo.', animal_name:'Zoo Animals'}); 
}

exports.camel = function(req, res, next) {
   console.log("Clicked on camel button")
   res.render('camel', { about: 'Camels are mammals with long legs, a big-lipped snout\
   and a humped back.', animal_name:'Camel'});
}

exports.croc = function(req, res, next) {
   console.log("Clicked on croc button")
   res.render('crocodile', { about: 'Crocodiles are repitles with sharp teeth.  They can run very fast over short distances.' , animal_name:'Crocodile'}); 
}

exports.cow = function(req, res, next) {
   console.log("Clicked on COW button")
   res.render('cow', { about: 'Cows are ruminants, which are cud chewing mammals. Sheep and camels also are ruminants. A cow chews her cud (regurgitated, partially digested food) for up to 8 hours each day.' , animal_name:'Cow'}); 
}

exports.monkey = function(req, res, next) {
   res.render('monkey', { about: 'Monkeys live in trees, grasslands, mountains, forests, and on high plains. Each monkey has its own unique fingerprints.' , animal_name:'Monkey'}); 
}

exports.map = function(req, res, next) {
   res.render('map', { markers: 'Markers will go here.'}); 
}

