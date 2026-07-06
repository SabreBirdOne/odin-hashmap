export default class HashMap {
    constructor(){
        this.loadFactor = 0.75; 
        // (Number of elements / number of buckets) at which point to double the buckets.
        
        this.capacity = 16; 
        // number of buckets. Note: this.buckets.length === this.capacity at all times.
        
        this.buckets = new Array(this.capacity); 
        // Array of Linked Lists to store elements
        // Each bucket / Linked List stores key-value pairs as elements
        
        this.numElements = 0; 
    }

    hash(key){
        /* takes a key to produce a hash code to a bucket*/
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value){
        /*
        takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten
        when a collision occurs, the key-value pair is prepended to the bucket it is hashed to
        when loadFactor is reached (this.length + 1 === loadFactor), double the number of buckets and rehash elements
        */
    }

    get(key){
        /* takes a key and returns the value assigned to this key. 
        If the key is not found, return null.*/
    }

    has(key){
        /* returns true if the key is in the hash map, else false */
    }

    remove(key){
        /* If the key is in the hash map, remove the entry with that key and return true. 
        If the key isn’t in the hash map, returns false 
        */
    }

    length() {
        // returns the number of stored keys in the hash map.
    } 

    clear() {
        // removes all entries in the hash map.
    } 

    keys() {
        // returns an array containing all the keys inside the hash map.
    }

    values() {
        // returns an array containing all the values.
    }

    entries() {
        /* returns an array that contains each key, value pair. 
        Example: [[firstKey, firstValue], [secondKey, secondValue]]
        A hash map does not preserve insertion order.
        */
    } 
}