import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    roots: ["<rootDir>/tests"],
    collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/main/**"],
    coverageDirectory: "coverage",
    coverageProvider: "babel",
    testEnvironment: "node",
    preset: "@shelf/jest-mongodb",
    testMatch: [
      "**/*.(spec|test).ts"
    ],
    transform: {
      ".+\\.ts$": "ts-jest",
    },
    moduleNameMapper: {
      "@/tests/(.*)": "<rootDir>/tests/$1",
      "@/(.*)": "<rootDir>/src/$1",
    },  
  }
}
