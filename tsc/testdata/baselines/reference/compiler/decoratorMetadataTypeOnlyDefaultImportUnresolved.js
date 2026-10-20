//// [tests/cases/compiler/decoratorMetadataTypeOnlyDefaultImportUnresolved.ts] ////

//// [decoratorMetadataTypeOnlyDefaultImportUnresolved.ts]
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


//// [decoratorMetadataTypeOnlyDefaultImportUnresolved.js]
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
class Foo {
}
__decorate([
    Decorator,
    __metadata("design:type", Object)
], Foo.prototype, "a", void 0);
__decorate([
    Decorator,
    __metadata("design:type", Object)
], Foo.prototype, "b", void 0);
const x = DefaultTypeOnly;
const y = NamedTypeOnly;
