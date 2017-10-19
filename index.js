/**
 * Export `test-api-key`
 */

module.exports = test_api_key;

/**
 * Create a `test-api-key`
 *
 * @param {String} key-length | default : 16
 * @param {String} key-prefix
 * @return {String} test-api-key
 */

function test_api_key(key_length,key_prefix) {
    
    if (isNaN(key_length)) {
        throw new Error('error in key-lenght : value is NaN : \"' + key_length + '\"');
    }
    if(key_prefix){
        key_prefix = key_prefix + '_';
    }else{
        key_prefix = '';
    }
    key_length = key_length || 16;
    return key_prefix + Math.random().toString(32).substr(2, key_length);;
}
