import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    roots: ["<rootDir>/tests"],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,tsx}',
      '!<rootDir>/src/frameworks/**/*',
      '!<rootDir>/src/**/index.ts',
      '!**/*.d.ts'
    ],
    coverageDirectory: "coverage",
    setupFilesAfterEnv: ['<rootDir>/src/frameworks/config/jest-setup.ts'],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/src/frameworks/test/cypress'
    ],
    testEnvironment: "jsdom",
    coverageProvider: "babel",
    testMatch: [
      "**/*.(spec|test).ts"
    ],
    transform: {
      '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
      "@/tests/(.*)": "<rootDir>/tests/$1",
      '@/(.*)': '<rootDir>/src/$1',
      '\\.scss$': 'identity-obj-proxy'
    }
  }
}
