const md5 = require('md5');

class Encryption {
    constructor(password){
        this.password = md5('GK' + password);
    }
    
    getEncryption = () => this.password;

    IsCompatible = (passwordDB) => (this.password === passwordDB);
}


module.exports = Encryption;