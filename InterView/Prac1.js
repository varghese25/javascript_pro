const obj = { x: 1, y: { z: 2 } };
Object.freeze(obj);
obj.y.z = 3;
console.log(obj.y.z);

/*
Answer: 3

Explanation:

Step 1: Create an object
const obj = { x: 1, y: { z: 2 } };

obj has two properties:
x -> number 1
y -> another object { z: 2 }

 In memory it will look like this: 
 obj → { x: 1, y: (ref) }
 ↓
 { z: 2 }
Step 2: Freeze the object
Object.freeze(obj);

Object.freeze()
makes the object immutable ->meaning you cannot add, remove, or change the properties of obj itself.
BUT Object.freeze() is shallow -> it only freezes the top-level properties, not nested objects.


obj.x = 1 -> not allowed
obj.y = { z: 2 } -> not allowed

BUT modifying obj.y.z is still allowed, because obj.y (the nested object) is not frozen.


Step 3: Modify nested property
obj.y.z = 3;

Since the freeze is shallow, you can still mutate the nested object y.
So now obj.y.z becomes 3.


Step 4: Log the value
console.log(obj.y.z);
OutPut: 3
*/