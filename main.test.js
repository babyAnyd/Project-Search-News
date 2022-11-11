import { newsList } from "./main.js";

test("Check news if contains a news title", () => {
  expect(newsList).toContain(
    "Media glare can enrich tennis pros yet imperil mental health"
  );
});

test("Check news if contains a news title", () => {
  expect(newsList).toContain(
    "Buried underpants and tea bags help scientists evaluate soil"
  );
});

test("Check news if contains a news title", () => {
  expect(newsList).toContain(
    "Decoder: Mining asteroids for minerals can help spare Earth"
  );
});

test("Check news if contains a news title", () => {
  expect(newsList).toContain(
    "Media glare can enrich tennis pros yet imperil mental health"
  );
});

test("Check news if contains a news title", () => {
  expect(newsList).toContain(
    "Nightmare' TV show 'Euphoria — health threat or high art?"
  );
});
