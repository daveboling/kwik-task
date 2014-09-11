'use strict';


function Task(o){
  this.name = o.name;
  this.due = new Date(o.date);
  this.priority = o.priority;
  this.isComplete = false;
}



Object.defineProperty(Task, 'collection', {
  get: function(){ return global.mongodb.collection('tasks');}
});


Task.create = function(obj, cb){
  var p = new Task(obj);
  Task.collection.save(p, cb);
};

Task.all = function(cb){
  Task.collection.find().toArray(cb);
};


module.exports = Task;
