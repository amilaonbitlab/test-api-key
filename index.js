/**
 * Export `test-api-key`
 */

module.exports = test_api_key;

/**
 * Create a `test-api-key`
 *
 * @param {String} key-length | default : 20
 * @param {String} key-prefix
 * @return {String} test-api-key
 */

function test_api_key(key_length,key_prefix) {
    
    if (typeof key_length !== 'undefined' && isNaN(key_length)) {
        throw new Error('error in key-length : value is NaN : \"' + key_length + '\"');
    }
    if(key_prefix){
        key_prefix = key_prefix + '_';
    }else{
        key_prefix = '';
    }
    key_length = key_length || 20;
    if(key_prefix.length){
        if(key_prefix.length >= key_length){
            throw new Error('error in key-prefix length should be less than key-length');
        }else{
            key_length = key_length - key_prefix.length;
        }
    }
    return key_prefix + Math.random().toString(31).substr(2, key_length);;
}
