// export default {
//   preset: "ts-jest/presets/default-esm", // Używamy ts-jest do obsługi TypeScript
//   testEnvironment: "node", // Środowisko testowe Node.js
//   moduleFileExtensions: ["ts", "js"], // Rozszerzenia plików, które mogą być importowane
//   testMatch: ["**/?(*.)+(spec|test).ts"], // Wzorce dopasowujące pliki testowe
//   globals: {
//     "ts-jest": {
//       useESM: true, // Aktywuje moduły ESM w ts-jest
//     },
//   },
//   moduleNameMapper: {
//     "^(\\.{1,2}/.*)\\.js$": "$1", // Usuwa rozszerzenie .js z importów
//   },
// };

import { type JestConfigWithTsJest, createDefaultPreset } from "ts-jest";

const defaultPreset = createDefaultPreset();

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest/presets/default-esm", // Używamy ts-jest do obsługi TypeScript
  testEnvironment: "node", // Środowisko testowe Node.js
  moduleFileExtensions: ["ts", "js"], // Rozszerzenia plików, które mogą być importowane
  testMatch: ["**/?(*.)+(spec|test).ts"], // Wzorce dopasowujące pliki testowe
  transform: {
    ...createDefaultPreset().transform,
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Usuwa rozszerzenie .js z importów
  },
  ...defaultPreset,
};

export default jestConfig;
