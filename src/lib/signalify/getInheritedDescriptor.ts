type DescriptorWithOwner = {
	owner: Record<string, unknown>;
} & PropertyDescriptor;

export function getInheritedDescriptor<T extends Record<string, unknown>>(obj: T, key: keyof T): DescriptorWithOwner | undefined {
	let currentProto = obj;
	let descriptor;

	while (currentProto) {
		descriptor = Object.getOwnPropertyDescriptor(currentProto, key);

		if (descriptor) {
			(descriptor as DescriptorWithOwner).owner = currentProto;
			return descriptor as DescriptorWithOwner;
		}

		currentProto = (currentProto as any).__proto__;
	}

	return void 0;
}
