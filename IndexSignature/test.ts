interface StringIndexStringArray {
  //change index types
  [index: string]: string;
}

interface StringArray {
  [index: number]: string;
}

interface NumberArray {
  [index: number]: number;
}

const stringIndexStringArray: StringIndexStringArray = {
  name: "Semistan",
  surname: "Abuzer",
};

const stringArray: StringArray = ["abc", "qwer"];
const numberArray: NumberArray = [1, 2, 3];

console.log("-----------------------------------------------------");

interface Color {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Color & Circle;

const circle: ColorfulCircle = { color: "red", radius: 15 };

const { color, radius } = circle;

console.log(`Color: ${color}, Radius: ${radius}`);
