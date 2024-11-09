# TypeScript Type Guards

## Introduction

Type guards are a powerful feature in TypeScript that help ensure type safety when working with flexible types, such as union types. They allow us to perform runtime checks that narrow down a variable's type, enabling TypeScript to better understand the properties and methods we can safely access.

In this post, we will explore the importance of type guards and discuss the various types of type guards in TypeScript, along with their use cases.

## Why Are Type Guards Necessary?

In TypeScript, you may encounter situations where a variable could be of multiple types (e.g., union types). This makes it difficult for TypeScript to determine which properties or methods you can safely access. Type guards solve this issue by allowing you to perform runtime checks, telling TypeScript exactly which type a variable is at a certain point in the code. This improves both type safety and code clarity.

Type guards are useful for:

- Narrowing down the possible types of a variable
- Enabling TypeScript to provide proper IntelliSense and type checking
- Making your code more robust and less error-prone

## Types of Type Guards

Here are different types of type guards and their use cases:

1. **`typeof` Type Guard**  
   Useful for checking primitive types like `string`, `number`, `boolean`, etc., and narrowing union types.

   **Use Case**: When you want to check if a variable is a specific primitive type like a `string` or `number`.

   ```typescript
   function displayLength(input: string | number): number {
     if (typeof input === "string") {
       return input.length;
     } else {
       return input.toString().length;
     }
   }
   ```

2. **`instanceof` Type Guard**  
   `instanceof` is used to check whether an object is an instance of a particular class or constructor function. This type guard is especially useful when working with objects that are created using classes or constructor functions.

   **Use Case**: When you need to determine if an object is an instance of a certain class, you can use `instanceof` to check and narrow down the type.

   Example:

   ```typescript
   class Dog {
     bark() {
       console.log("Woof!");
     }
   }
   class Cat {
     meow() {
       console.log("Meow!");
     }
   }

   function interactWithPet(pet: Dog | Cat) {
     if (pet instanceof Dog) {
       pet.bark(); // Narrowed down to Dog type
     } else {
       pet.meow(); // Narrowed down to Cat type
     }
   }
   ```

3. **`in` Operator Type Guard**  
   The `in` operator is another powerful type guard in TypeScript that checks whether a property exists in an object. It can be used to differentiate between different types that share some properties but have others that are unique to each type.

   **Use Case**: When you have objects of different types that may share some common properties, but also have unique ones, you can use the `in` operator to check for the presence of those properties and narrow down the type.

   Example:

   ```typescript
   interface Dog {
     bark: () => void;
     breed: string;
   }

   interface Cat {
     meow: () => void;
     breed: string;
   }

   function speak(animal: Dog | Cat) {
     if ("bark" in animal) {
       animal.bark(); // animal is narrowed to Dog
     } else {
       animal.meow(); // animal is narrowed to Cat
     }
   }
   ```

4. **Custom Type Guards**  
   A custom type guard is a user-defined function that allows you to define your own type-checking logic. It returns a type predicate that informs TypeScript about the type of a variable after a condition has been checked. Custom type guards are particularly useful when you need more complex checks that can't be covered by TypeScript’s built-in type guards.

   **Use Case**: Custom type guards are perfect for narrowing down types based on specific business logic, such as checking the existence of certain properties or the validity of values that are not easily inferred by TypeScript.

   **Example**:

   ```typescript
   interface Dog {
     bark: () => void;
     breed: string;
   }

   interface Cat {
     meow: () => void;
     breed: string;
   }

   // Custom type guard function
   function isDog(animal: Dog | Cat): animal is Dog {
     return (animal as Dog).bark !== undefined;
   }

   const animal1: Dog = { bark: () => console.log("Woof!"), breed: "Labrador" };
   const animal2: Cat = { meow: () => console.log("Meow!"), breed: "Persian" };

   // Use the custom type guard
   if (isDog(animal1)) {
     animal1.bark(); // TypeScript now knows that animal1 is of type Dog
   }
   ```

### Summary:

- **Custom Type Guards**: Useful when built-in guards are insufficient for more complex conditions.
- **`typeof`**: Simplifies narrowing of primitive types like `string`, `number`, and `boolean`.

This section completes the discussion on various type guards in TypeScript, providing concrete examples and insights on how each guard works in real-world scenarios.
