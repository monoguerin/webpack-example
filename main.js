import "./styles.less";
import { sortBy } from "lodash";
import { doubleMethod } from "./mathHelpers";

const result = doubleMethod(2);

const myArray = [
  {
    name: "Cesar"
  },
  {
    name: "Andres"
  },
  {
    name: "Max"
  },
  {
    name: "Mauricio"
  }
];

const sortedString = sortBy(myArray, "name").map(person => person.name).join(" ");

document.querySelector("#app").innerHTML = `${sortedString} -- ${result}`;
