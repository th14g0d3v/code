/**
 * Here is a module which exports a function and a css configuration
 */
declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}
