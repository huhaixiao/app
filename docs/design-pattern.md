- [Coding Principle](#coding-principle)
- [SOLID](#solid)
- [Design Pattern](#design-pattern)
  - [Creational pattern](#creational-pattern)
    - [Factory & Abstract factory](#factory--abstract-factory)
    - [Builder](#builder)
    - [Prototype](#prototype)
    - [Singleton](#singleton)

# Coding Principle

- Consistency is king
  - 一致性原则(错也要错成一个样子)
  - Consistently bad is better than inconsistently good.
- 可读性高于性能
- SOLID
- 高内聚、低耦合
- 最小作用域
- DRY（Don't Repeat Yourself)
- KISS（Keep It Simple, Stupid）
- YAGNI（You Ain't Gonna Need It）
- SSH（Shit Stop Here）处理历史代码

# SOLID

# Design Pattern

- [refactoring.guru](https://refactoring.guru/)

## Creational pattern

### Factory & Abstract factory

```ts
interface WheelFactory {
  getProduct(): Wheel;
}

interface GlassFactory {
  getProduct(): Glass;
}

interface ICarFactory {
  wheelFactory: WheelFactory;
  glassFactory: GlassFactory;
}
```

### Builder

```ts
interface CarBuilder {
  reset(): void;
  setWheel(): void;
  setMirror(): void;
  setDoor(): void;
  getResult(): Car;
}

class SuvBuilder implements CarBuilder {}
class SportsCarBuilder implements CarBuilder {}

interface Director {
  makeSuv(builder: CarBuilder): Car;
  makeSportsCar(builder: CarBuilder): Car;
}
```

### Prototype

```ts
interface IPrototype {
  clone(): this;
}
```

### Singleton

```ts
class Singleton {
  private static instance: Singleton;
  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
  private constructor() {}
}
```

# Functional Programming

- functor
- monad
