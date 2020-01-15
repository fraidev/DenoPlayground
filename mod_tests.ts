import {
  assertEquals,
  test
} from "https://deno.land/std/testing/mod.ts";
import { foo } from "./mod.ts";

test(function myTestFunction() {
  assertEquals(foo(), { bar: "bar" });
});