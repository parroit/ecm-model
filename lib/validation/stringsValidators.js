var _ = require("lodash");

exports.maxLength = function(size){
    return {
        validator:function(value){
            //console.log(value);
            return value && value.length <= size;
        },
        msg:"!'max %s', "+size
    };
};


exports.oneOf = function(enumValues){
    var error = "!'accept one of %s', '" + _.values(enumValues).join(",") + "'";
    //console.dir(error)
    return {
        validator:function(value){
            return value && value in enumValues;
        },
        msg:error
    };
};
