# Typescript Notes

# Define Types

কয়েকভাবে টাইপ ডিফাইন্ড করা যায়। যেমনঃ

1. প্রথম যে টাইপের মান লেখবো তাকেই ধরে নিবে।

```jsx
let a = "Bangla"
let num = 45;
let bol = true;
```

1. নামের সাথে নির্দিষ্ট করে বলে দেয়া যায়। যেমনঃ

```jsx
let a: string = "Bangla"
let num:number = 45;
let bol:boolean = true;
```

1. অথবা মানের সাথে নির্দিষ্ট করে বলে দেয়া যায়। যেমনঃ

```jsx
let a = <string> "Bangla"
```

1. ইউনিয়ন ভেরিয়াবলঃ (দুইটা থেকে যেকোনো একটা)

```jsx
let a: number | string = 34;
a = "hello world"
```

1. ফাংশন 

```jsx
function sum(a:number, b:number) => {
console.log(a+b);
return(a+b) // error void;
}

// You have to defined 2 ways.
example: 1
function sum(a:number, b:number):number => {
	console.log(a+b);
return(a+b)
}

exxample: 2
function sum(a:number, b:number) => {
	console.log(a+b);
return String(a+b);
}
```

### Array In TypeScript:

```jsx
//Declarion arrays in TypeScript ways, 
//example: 1
let arr:number[] = [1, 2, 3, 4, 5];
const arr2:string[] = ["I love to learn", "One day I will be successful"];

-----------------------------------------------------------
//example: 2
const arr:Array<string> = ["HI", "HELLO", "WORLD"];
const arrNum:Array<number | string> = [45, 6, 7, 8, "Hello world"]
```

### Object in TypeScript:

```jsx
//Example 1

type obj {
name: string,
gender: boolean,
age ?: number
}

const obj = {name: "abu bokor", gender: true, age: 21} 

//Example 2

interface newObbj extends obj {
//func?: () => void
//func?: (a: number, b:number) => number
}
//extends means mandatory all value in obj

const obj2:newObbj = {

}
```

### Function In TypeScript:

```jsx
//normal function
function minus(a: number, b: number): number {
  return a - b;
}

const result = minus(10, 10);
console.log(result);

---------------------------------------
//array function
//Example: 1
//Optional parameter
type funcType = (n: number, m: number, o?: number) => number;
const func: funcType = (n, m, o) => {
  if (typeof o === "undefined") {
    return n + m;
  }
  return n + m + o;
};
func(43, 4);

//Rest operator

type funcType = (...m:number[]) => number[]
const func:funcType = (...m) => {

return m;
}

func(35, 64, 64, 432, 5, 76);
```

### Function with object

readonly: only see not change;

private: only accessed in the block scope;

private:

```jsx
//In Types
type getDatatype = (product: {
  name: string;
  age: number;
  color: string;
  male: boolean;
}) => void;

const getData: getDatatype = (product) => {
  console.log(product);
};

const person = {
  name: "John",
  age: 34,
  color: "white",
  male: true,
};

getData(person);

//In interface

interface person {
  name: string;
  photo: string;
  age: number;
  disabled: boolean;
}

const getData = (person: person) => {
  console.log(person);
};
const personData: person = {
  name: "John",
  photo: "hi",
  age: 43,
  disabled: false,
};

getData(personData);

```

### Never Type:

```jsx
const errorHandler = (): never => {
  throw new Error();
};

------------------------
type themeMode = "light" | "Dark";
const mode: themeMode = "light";
```

## Classes:

```jsx
class player {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const result = new player("bokor", 21);
console.log(result);

class address {
  country: string = "bangladesh";
  capitality;
  district;
  thana;
  village;

  constructor(
    private capitality: string,
    district: string,
    thana: string,
    village: string
  ) {
    this.capitality = capitality;
    this.district = district;
    this.thana = thana;
    this.village = village;
  }
}

const result2 = new address("Dhaka", "Cumilla", "Muradnagar", "shushunda");
console.log(result2);
```

### Type Assertion

```jsx
//3 ways to type declare
//Like DOM manupulation: btn?.onclick; 

**You have to Id**

Example 1
const btn = document.getElementById("btn") as HTMLElement; 
-----------------------OR--------------------------------
Example 2
const btn = <HTMLElement>document.getElementById("btn");

Example 3
const btn = document.getElementById("btn")!;
// some times you have to specific declaretion
const img = document.getElementById("image") as HTMLImageElement;
```

### Form:

```jsx
const form = document.getElementById("myForm")!;
const number = document.getElementById("number") as HTMLInputElement;
const list = document.getElementById("list")!;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const value = Number(number.value);
  const li = document.createElement("li");
  li.innerHTML = String(value + 20);
  list.appendChild(li);
  number.value = "";
};
```

! (not understand)

```jsx
interface product {
  name: string;
  quantity: number;
  brand: string;
  price: number;
}

const myObj: product = {
  name: "Aloz",
  quantity: 1,
  brand: "Pran",
  price: 100,
};
let key = "name";
myObj[key as keyof typeof myObj];

const pro = (key: keyof product): string => {
  return key;
};
```

## Utility type:

### **Partial<Type>**

Constructs a type with all properties of `Type` set to optional.

```jsx
type User = {
  name: string;
  email: string;
};
type User2 = Partial<User>;
```

**Required<Type>(opposite of Partial)**

Constructs a type consisting of all properties of `Type` set to required.

```jsx
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 };
Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
-------------------------------------
interface user {
  a?: string;
  b?: string;
}
const user1: user = { a: "Apple" };
const user2: Required<user> = { a:"Apple", b: "Ball" };
```

**Readonly<Type>**

Constructs a type with all properties of `Type` set to `readonly`

```jsx
interface Todo {
  title: string;
}
 
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
 
todo.title = "Hello";
Cannot assign to 'title' because it is a read-only property.
---------------------------------------------
//Readonly
interface user {
  a: string;
  b: string;
}
type user2 = Readonly<user>;
const user1: user2 = { a: "Apple", b: "Ball" };
user1.a = "cat";
```

**Record<Keys, Type>**

Constructs an object type whose property keys are `Keys` and whose property values are `Type`. This utility can be used to map the properties of a type to another type.

```jsx
interface record {
  name: string;
  email: string;
  password: number;
}

type user = Record<"name" | "email" | "password", "string">;
```

**Pick<Type, Keys>**

Constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`.

```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
 
todo;
 
const todo: TodoPreview
```

**Omit<Type, Keys>**

Constructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals). The opposite of `[Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)`.

```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
todo;
 
const todo: TodoPreview
 
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
 
todoInfo;
   
const todoInfo: TodoInfo
```

**Exclude<UnionType, ExcludedMembers>(  uncommon)**

Constructs a type by excluding from `UnionType` all union members that are assignable to `ExcludedMembers`.

```tsx
type T0 = Exclude<"a" | "b" | "c", "a">;
     
type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
     
type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
     
type T2 = string | number
 
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T3 = Exclude<Shape, { kind: "circle" }>
     
type T3 = {
    kind: "square";
    x: number;
} | {
    kind: "triangle";
    x: number;
    y: number;
}
```

**Extract<Type, Union>(common)**

Constructs a type by extracting from `Type` all union members that are assignable to `Union`.

```tsx
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
     
type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
     
type T1 = () => void
 
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T2 = Extract<Shape, { kind: "circle" }>
     
type T2 = {
    kind: "circle";
    radius: number;
}
```

**NonNullable<Type>(without null, undefined)**

Constructs a type by excluding `null` and `undefined` from `Type`.

```tsx
type T0 = NonNullable<string | number | undefined>;
     
type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
     
type T1 = string[]
```

**Parameters<Type>**

Constructs a tuple type from the types used in the parameters of a function type `Type`.

**ReturnType<Type>**

Constructs a type consisting of the return type of function `Type`.

```tsx
declare function f1(): { a: number; b: string };
 
type T0 = ReturnType<() => string>;
     
type T0 = string
type T1 = ReturnType<(s: string) => void>;
     
type T1 = void
type T2 = ReturnType<<T>() => T>;
     
type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
     
type T3 = number[]
type T4 = ReturnType<typeof f1>;
     
type T4 = {
    a: number;
    b: string;
}
type T5 = ReturnType<any>;
     
type T5 = any
type T6 = ReturnType<never>;
     
type T6 = never
type T7 = ReturnType<string>;
Type 'string' does not satisfy the constraint '(...args: any) => any'.
     
type T7 = any
type T8 = ReturnType<Function>;
Type 'Function' does not satisfy the constraint '(...args: any) => any'.
  Type 'Function' provides no match for the signature '(...args: any): any'.
     
type T8 = any
```

**InstanceType<Type>**

Constructs a type consisting of the instance type of a constructor function in `Type`.

```tsx
class C {
  x = 0;
  y = 0;
}
 
type T0 = InstanceType<typeof C>;
     
type T0 = C
type T1 = InstanceType<any>;
     
type T1 = any
type T2 = InstanceType<never>;
     
type T2 = never
type T3 = InstanceType<string>;
Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
     
type T3 = any
type T4 = InstanceType<Function>;
Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  Type 'Function' provides no match for the signature 'new (...args: any): any'.
```

## Generics in TypeScript: !

যখন একটি ফাংশনের মান কি হবে আমরা জানি না, যেকোনো হতে পারে। কিন্ত any লেখা যাবে না। কারন লেখলে টাইপস্ক্রিপ্ট এর কোনো দরকারই পড়ে না। এই কাজটা করার জন্য জেনেরিক প্রয়োজন।

```tsx
interface person {
  name: string;
  age: number;
}

const func = <T>(n: T): T => {
  return n;
};

const person2: person = {
  name: "John",
  age: 42,
};

const result = func<person>(person2);
console.log(result);
```

```tsx
//Advanced
const func = <T, U>(m: T, n: U): { m: T; n: U } => {
  return { m, n };
};

const result = func<number, string>(34, "generic type");
console.log(result);

const func1 = <T, U>(m: T, n: U): object => {
  return { m, n };
};

const result1 = func<number, string>(34, "generic type");
console.log(result1);
```

```tsx
interface person {
  name: string;
  age: number;
}

const user: person[] = [
  {
    name: "John",
    age: 34,
  },
  {
    name: "anmol",
    age: 5,
  },
  {
    name: "rayhan",
    age: 8,
  },
];

const filterPeople = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => item[property] === value);
};

const filterByName = filterPeople(user, "name", "rayhan");
console.log(filterByName);
```

[Documentation - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

[Master TypeScript in one video 🔥](https://youtu.be/66_bET6sI20?si=fe1Z3s6PBer4Ve6F)
