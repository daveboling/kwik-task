'use strict';


function Priority(o){
  this.name = o.name;
  this.color = o.color;
}



Object.defineProperty(Priority, 'collection', {
  get: function(){ return global.mongodb.collection('priorities');}
});


Priority.create = function(obj, cb){
  var p = new Priority(obj);
  Priority.collection.save(p, cb);
};

Priority.all = function(cb){
  Priority.collection.find().toArray(cb);
};


module.exports = Priority;
