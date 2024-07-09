function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet("Alice");  // Output: Hello, Alice!
greet("Bob", "Hi");  // Output: Hi, Bob!
