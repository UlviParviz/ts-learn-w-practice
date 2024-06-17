//keyof

type Point = { x: string; y: number; z: boolean };

type P = keyof Point; // same -> type P = "x" | "y" | "x"

//typeof

let text = "hello"; //type string

let random: typeof text = "adasda";

console.log(typeof random); //string

//------------------------------------------------------------------------

function getType() {
  return { x: 10, y: "hello" };
}

type XY = ReturnType<typeof getType>; //type XY = { x: number, y: string }

const xy: XY = { x: 5, y: "salam" };
