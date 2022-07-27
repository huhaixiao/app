/**
 * @description Partial<Todo>
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 */
type IPartial<T> = { [P in keyof T]?: T[P] };
type partial = Partial<{ foo: string }>;

// ---
interface Todo {
  title: string;
  description: string;
  date?: Date;
}

type Cars = 'Tesla' | 'Benz' | 'BMW';

type required = Required<Todo>;
type readonly = Readonly<Todo>;
type record = Record<string, Todo>;
type pick = Pick<Todo, 'title' | 'date'>;
type omit = Omit<Todo, 'title' | 'date'>;

/**
 * @example
 * Exclude<UnionType, ExcludedMembers>
 */
type exclude = Exclude<Cars, 'Benz' | 'BMW'>;
const excludeValue: exclude = 'Tesla';

/**
 * @example
 * Extract<UnionType, ExcludedMembers>
 */
type extract = Extract<Cars, 'Tesla'>;
const extractValue: extract = 'Tesla';

/**
 * @example
 * type Extract<T, U> = T extends U ? T : never
 */
type extract2 = Extract<Todo, 'title'>;
