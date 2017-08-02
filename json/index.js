var jsonValue = require('./book');

module.exports = {
    getname : function(){
        return `Book with name is ${jsonValue.name}`;
    }

}