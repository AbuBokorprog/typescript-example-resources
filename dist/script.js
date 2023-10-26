"use strict";
// let nam: string = "Hello World";
// // console.log(nam);
// let bol = true;
// let num = <number>1000;
// // console.log(num);
// const arr: number[] = [1, 2, 3, 4, 5];
// const arr2: Array<number | string> = [1, 2, 3, 4, 5, "hello world"];
// // console.log(arr, arr2);
// type obj = {
//   name: string;
//   gender: boolean;
//   age: number;
// };
// const obj: obj = {
//   name: "abu bokor",
//   gender: true,
//   age: 21,
// };
// console.log(obj);
//optional parameter
// type funcType = (n: number, m: number, o?: number) => number;
// const func: funcType = (n, m, o) => {
//   if (typeof o === "undefined") {
//     return n + m;
//   }
//   return n + m + o;
// };
// func(43, 4);
// Rest operator
// type funcType1 = (...m: string[]) => string[];
// type funcType2 = (m: number, n: number) => number;
// function minus(a: number, b: number): number {
//   return a - b;
// }
// const result = minus(10, 10);
// console.log(result);
//Function with object
// type getDatatype = (product: {
//   name: string;
//   age: number;
//   color: string;
//   male: boolean;
// }) => void;
// const getData: getDatatype = (product) => {
//   console.log(product);
// };
// const person = {
//   name: "John",
//   age: 34,
//   color: "white",
//   male: true,
// };
// getData(person);
// interface person {
//   name: string;
//   photo: string;
//   age: number;
//   disabled: boolean;
// }
// const getData = (person: person) => {
//   console.log(person);
// };
// const personData: person = {
//   name: "John",
//   photo: "hi",
//   age: 43,
//   disabled: false,
// };
// getData(personData);
//never type
// const errorHandler = ():never => {
//   throw new Error();
// };
// type themeMode = "light" | "Dark";
// const mode: themeMode = "light";
// class player {
//   name;
//   age;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const result = new player("bokor", 21);
// console.log(result);
// class address {
//   country: string = "bangladesh";
//   protected capitality;
//   public district;
//   thana;
//   village;
//   constructor(
//     capitality: string,
//     district: string,
//     thana: string,
//     village: string
//   ) {
//     this.capitality = capitality;
//     this.district = district;
//     this.thana = thana;
//     this.village = village;
//   }
// }
// const result2 = new address("Dhaka", "Cumilla", "Muradnagar", "shushunda");
// console.log(result2);
// Type Assertion
// const btn = <HTMLElement>document.getElementById("btn");
// const btn = document.getElementById("btn")!;
// const img = document.getElementById("image") as HTMLImageElement;
// img.src = "http://";
// form
// const form = document.getElementById("myForm")!;
// const number = document.getElementById("number") as HTMLInputElement;
// const list = document.getElementById("list")!;
// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const value = Number(number.value);
//   const li = document.createElement("li");
//   li.innerHTML = String(value + 20);
//   list.appendChild(li);
//   number.value = "";
// };
// interface product {
//   name: string;
//   quantity: number;
//   brand: string;
//   price: number;
// }
// const myObj: product = {
//   name: "Aloz",
//   quantity: 1,
//   brand: "Pran",
//   price: 100,
// };
// let key = "name";
// myObj[key as keyof typeof myObj];
// const pro = (key: keyof product): string => {
//   return key;
// };
//UTILITY
// Partial Types
// type User = {
//   name: string;
//   email: string;
// };
// type User2 = Partial<User>;
//Required Types
// interface user {
//   a?: string;
//   b?: string;
// }
// const user1: user = { a: "Apple" };
// const user2: Required<user> = { a: "Apple", b: "Ball" };
// //Readonly
// interface user {
//   a: string;
//   b: string;
// }
// type user2 = Readonly<user>;
// const user1: user2 = { a: "Apple", b: "Ball" };
// user1.a = "cat";
// Record<Keys, Type>
// interface record {
//   name: string;
//   email: string;
//   password: number;
// }
// type user = Record<"name" | "email" | "password", "string">;
//Pick<Type, Keys>
// -------------------------------------------------------
// Generics Types
//Don't write any, you have to avoid it.
// interface person {
//   name: string;
//   age: number;
// }
// const func = <T>(n: T): T => {
//   return n;
// };
// const person2: person = {
//   name: "John",
//   age: 42,
// };
// const result = func<person>(person2);
// console.log(result);
// Intermediate
// const func = <T, U>(m: T, n: U): { m: T; n: U } => {
//   return { m, n };
// };
// const result = func<number, string>(34, "generic type");
// console.log(result);
// const func1 = <T, U>(m: T, n: U): object => {
//   return { m, n };
// };
// const result1 = func<number, string>(34, "generic type");
// console.log(result1);
// Advanced
// interface person {
//   name: string;
//   age: number;
// }
// const user: person[] = [
//   {
//     name: "John",
//     age: 34,
//   },
//   {
//     name: "anmol",
//     age: 5,
//   },
//   {
//     name: "rayhan",
//     age: 8,
//   },
// ];
// const filterPeople = <T, U extends keyof T>(
//   arr: T[],
//   property: U,
//   value: T[U]
// ): T[] => {
//   return arr.filter((item) => item[property] === value);
// };
// const filterByName = filterPeople(user, "name", "rayhan");
// console.log(filterByName);
