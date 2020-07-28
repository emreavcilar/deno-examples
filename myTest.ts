import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
Deno.test("title", () => {
  const h1 = "My first blog";
  assertEquals(h1, "My first blog");
});
