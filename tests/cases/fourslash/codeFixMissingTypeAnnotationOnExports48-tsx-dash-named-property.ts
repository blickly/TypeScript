/// <reference path='fourslash.ts'/>

// @isolatedDeclarations: true
// @declaration: true
// @lib: dom
// @Filename: /code.tsx
//// declare global {
////     namespace JSX {
////       export type Element = Node | Node[];
////     }
//// }
//// export const x = <div aria-label="hello" />;

verify.codeFix({
    description: "Add annotation of type 'JSX.Element'",
    index: 0,
    newFileContent:
`declare global {
    namespace JSX {
      export type Element = Node | Node[];
    }
}
export const x: JSX.Element = <div aria-label="hello" />;`,
});
