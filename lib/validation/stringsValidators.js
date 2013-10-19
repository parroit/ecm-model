exports.maxLength = function(size){
    return [function(value){
        //console.log(value);
        return value && value.length <= size;
    },"'max %s', "+size];
};
