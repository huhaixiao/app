/**
 * My React types
 */

declare namespace MyReact {
  type MyJSXElementConstructor<P> =
    | ((props: P) => MyReactElement<any, any> | null)
    | (new (props: P) => MyComponent<any, any>);

  type MyReactText = string | number;
  type MyReactChild = MyReactElement | MyReactText;
  type MyKey = string | number;

  interface MyReactElement<
    P = any,
    T extends string | MyJSXElementConstructor<any> =
      | string
      | MyJSXElementConstructor<any>
  > {
    type: T;
    props: P;
    key: MyKey | null;
  }

  class MyComponent<P, S> {
    // tslint won't let me format the sample code in a way that vscode likes it :(
    /**
     * If set, `this.context` will be set at runtime to the current value of the given Context.
     *
     * Usage:
     *
     * ```ts
     * type MyContext = number
     * const Ctx = React.createContext<MyContext>(0)
     *
     * class Foo extends React.Component {
     *   static contextType = Ctx
     *   context!: React.ContextType<typeof Ctx>
     *   render () {
     *     return <>My context's value: {this.context}</>;
     *   }
     * }
     * ```
     *
     * @see https://reactjs.org/docs/context.html#classcontexttype
     */
    static contextType?: MyContext<any> | undefined;

    /**
     * If using the new style context, re-declare this in your class to be the
     * `React.ContextType` of your `static contextType`.
     * Should be used with type annotation or static contextType.
     *
     * ```ts
     * static contextType = MyContext
     * // For TS pre-3.7:
     * context!: React.ContextType<typeof MyContext>
     * // For TS 3.7 and above:
     * declare context: React.ContextType<typeof MyContext>
     * ```
     *
     * @see https://reactjs.org/docs/context.html
     */
    context: unknown;

    constructor(props: Readonly<P> | P);
    /**
     * @deprecated
     * @see https://reactjs.org/docs/legacy-context.html
     */
    constructor(props: P, context: any);

    // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
    // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
    // Also, the ` | S` allows intellisense to not be dumbisense
    setState<K extends keyof S>(
      state:
        | ((
            prevState: Readonly<S>,
            props: Readonly<P>
          ) => Pick<S, K> | S | null)
        | (Pick<S, K> | S | null),
      callback?: () => void
    ): void;

    forceUpdate(callback?: () => void): void;
    render(): MyReactNode;

    readonly props: Readonly<P>;
    state: Readonly<S>;
    /**
     * @deprecated
     * https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
     */
    refs: {
      [key: string]: MyReactInstance;
    };
  }
}
