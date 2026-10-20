// @module: commonjs
// @target: es2015
// @experimentalDecorators: true
// @emitDecoratorMetadata: true

// A default type-only import of an unresolvable module must still be treated
// as type-only: decorator metadata serializes it as `Object` instead of
// referencing the elided import, and using it as a value reports TS1361.
import type DefaultTypeOnly from 'unknown-module-default';
import { type NamedTypeOnly } from 'unknown-module-named';

declare var Decorator: any;

class Foo {
  @Decorator a?: DefaultTypeOnly;
  @Decorator b?: NamedTypeOnly;
}

const x = DefaultTypeOnly;
const y = NamedTypeOnly;
