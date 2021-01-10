// https://github.com/microsoft/TypeScript/issues/28046#issuecomment-480516434
export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;
