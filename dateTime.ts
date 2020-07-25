import {
  parseDate,
  parseDateTime,
} from "https://deno.land/std/datetime/mod.ts";
let date = parseDate("26-07-2020", "dd-mm-yyyy");
console.log(date);
