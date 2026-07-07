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

test("Doubling buckets test", ()=>{
    let testMap = createColorMap();
    testMap.set('moon', 'silver')

    expect(testMap.numElements <= testMap.capacity * testMap.loadFactor)
    .toBeTruthy();
    expect(testMap.numElements).toBe(13);
})
