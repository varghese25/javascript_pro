// Liskov Substitution Principle (LSP) in JavaScript

class Bird {
  fly() {
    console.log("Flying");
  }
}



// Violation of LSP ❌ Penguins can't fly!

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

/*
Why this breaks LSP

makeBirdFly() expects a Bird

Penguin is a Bird (by inheritance)

But Penguin does not behave like a Bird

It breaks the promise that all Birds can fly*/




//How to FIX this (Correct Design) ✅ Option 1: Separate behaviors

class Bird {}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Swimming");
  }
}


// Option 2: Use capability interfaces (best practice)

class Flyable {
  fly() {
    console.log("Flying");
  }
}

class Sparrow extends Flyable {}

class Penguin {
  swim() {
    console.log("Swimming");
  }
}


// One-line takeaway (very important ⭐) Do not force child classes to implement behavior they cannot support.
// LSP in one sentence A subclass should be replaceable for its superclass without causing errors or unexpected behavior.