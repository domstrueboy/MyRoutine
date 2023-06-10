export type DecoratorContext = {
	kind: 'class' | 'method' | 'getter' | 'setter' | 'field' | 'accessor';
	name: string | symbol;
	access: Access;
	private?: boolean;
	static?: boolean;
	addInitializer?(initializer: () => void): void;
};

export type Access = {
	get?(): unknown;
	set?(value: unknown): void;
};

export type Accessor = {
	get(): unknown;
	set(value: unknown): void;
};

export type Constructor<T = Record<string, unknown>, A extends any[] = any[], Static = Record<string, unknown>> = (new (...a: A) => T) & Static;

export type DecoratedValue = Constructor | Function | Accessor | undefined;

export type DecoratorArgs = [DecoratedValue, DecoratorContext];

export type PropKey = string | symbol;

// If we add options for `@signal` later (f.e. `@signal({equals: false})`),
// those options can go in here too.
export type PropSpec = {
	initialValue: unknown;
};
