/**
 * @var makeApiUrl Receive path and return it with api url, to access backend
 * @param path The server URL that will be used for the request
 * @returns `${process.env.API_URL}${path}`This is all the address to access server
 */
export const makeApiUrl = (path: string): string => `${process.env.API_URL}${path}`
