type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  shape: "circle";
  radius: number;
};

const calculateShapeArea = (shape: Rectangle | Circle): number => {
  if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
  if (shape.shape === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  }
  throw new Error("Invalid shape type");
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

console.log(circleArea);
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(rectangleArea);
