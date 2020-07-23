import { writable } from "svelte/store";

let padding = 0;
let bgColor = "#000";
let text = "Enter text";

export const styles = writable({
  padding,
  bgColor,
  text,
});
