/**
 * Export `test-api-key`
 */

module.exports = test-api-key;

/**
 * Create a `test-api-key`
 *
 * @param {String} key-length | default : 16
 * @param {String} key-prefiex
 * @return {String} test-api-key
 */

function zuid(key-length,key-prefiex) {
    
    if (isNaN(key-length)) {
        throw new Error('error in lenght : value is NaN : \"' + len + '\"');
    }
    if(key-prefiex){
        key-prefiex = key-prefiex + '_';
    }else{
        key-prefiex = '';
    }
    key-length = key-length || 16;
    return key-prefiex + Math.random().toString(32).substr(2, len);;
}
