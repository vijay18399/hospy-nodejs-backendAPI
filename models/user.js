var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    profession : String,
    createdAt: Date

});
UserSchema.pre('save',  function(next) {
    var User = this;

     if (!User.isModified('password')) return next();

     bcrypt.genSalt(10, function(err, salt) {
         if (err) return next(err);
 
         bcrypt.hash(User.password, salt, function(err, hash) {
             if (err) return next(err);
 
             User.password = hash;
             next();
         });
     });
});
 
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
 


module.exports = mongoose.model('User', UserSchema);