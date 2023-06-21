module.exports ={
    multipleMongooseToObject : function(mongooses){
        return mongooses.map(mongooses => mongooses.toObject())
    },
    mongooseToObject : function (mongoose){
        return mongoose ? mongooses.toObject() : mongoose
    }
}