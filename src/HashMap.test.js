import HashMap from "./HashMap";

function createColorMap(){
    let map =  new HashMap() // or HashMap() if using a factory

    map.set('apple', 'red')
    map.set('banana', 'yellow')
    map.set('carrot', 'orange')
    map.set('dog', 'brown')
    map.set('elephant', 'gray')
    map.set('frog', 'green')
    map.set('grape', 'purple')
    map.set('hat', 'black')
    map.set('ice cream', 'white')
    map.set('jacket', 'blue')
    map.set('kite', 'pink')
    map.set('lion', 'golden') 

    return map;
} 

test("Initial color map test", ()=>{
    const testMap = createColorMap();
    expect(testMap.numElements <= testMap.capacity * testMap.loadFactor)
    .toBeTruthy();
    expect(testMap.numElements).toBe(12);
})

test("get() function test", ()=>{
    const testMap = createColorMap();
    expect(testMap.get('ice cream')).toBe('white');
    expect(testMap.get('lion')).toBe('golden');  
})

test("set() function test: updating existing key-value pairs", ()=>{
    let testMap = createColorMap();
    testMap.set('ice cream', 'vanilla');
    testMap.set('lion', 'orange');

    expect(testMap.get('ice cream')).toBe('vanilla');
    expect(testMap.get('lion')).toBe('orange');
    expect(testMap.get('carrot')).toBe('orange');  

    expect(testMap.numElements <= testMap.capacity * testMap.loadFactor)
    .toBeTruthy();
    expect(testMap.numElements).toBe(12);
    
})

test("Doubling buckets test", ()=>{
    let testMap = createColorMap();
    testMap.set('moon', 'silver')

    expect(testMap.numElements <= testMap.capacity * testMap.loadFactor)
    .toBeTruthy();
    expect(testMap.numElements).toBe(13);
    expect(testMap.capacity).toBe(32);
})

test("has() function test", ()=>{
    const testMap = createColorMap();
    expect(testMap.has('raven')).toBeFalsy();
    expect(testMap.has('lion')).toBeTruthy();
});

test("remove() function test", ()=>{
    const testMap = createColorMap();
    
    let result = testMap.remove('raven');
    expect(result).toBeFalsy();
    expect(testMap.numElements).toBe(12);

    // console.log(testMap.buckets[testMap.hash('lion')]);
    result = testMap.remove('lion');

    expect(result).toBeTruthy();
    expect(testMap.numElements).toBe(11);
    // console.log(testMap.buckets[testMap.hash('lion')]);
})

test("length() function test", ()=>{
    const testMap = createColorMap();
    expect(testMap.length()).toEqual(testMap.numElements);
})

test("clear() function test", ()=>{
    let testMap = createColorMap();
    testMap.clear();
    expect(testMap.length()).toEqual(0);
    expect(testMap.buckets[0]).toBeUndefined()
})