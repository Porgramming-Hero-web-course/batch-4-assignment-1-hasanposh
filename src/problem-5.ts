{
  //
  type Person = {
    name: string;
    age: number;
  };

  const getProperty = <X, Y extends keyof X>(object: X, property: Y) => {
    return object[property];
  };

  const person = { name: "Alice", age: 40 };
  console.log(getProperty(person, "age"));

  //
}
