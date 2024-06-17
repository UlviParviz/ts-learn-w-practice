type Person = { age: number; name: string; isAlive: boolean };

type Age = Person["age"]; //type Age = number
type Name = Person["name"]; //type Name = string                   //-> Static Types
type Alive = Person["isAlive"]; //type Alive = boolean

type Keys = keyof Person; //type Keys = "age" | "name" | "isAlive"   //-> Literal Type

type P = Person[Keys]; //type P = number | string | boolean          //-> Union Type
