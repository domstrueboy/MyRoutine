interface DescriptorWithOwner extends PropertyDescriptor {
	owner: object
}

export function getInheritedDescriptor<T extends object>(obj: T, key: keyof T): DescriptorWithOwner | undefined {
	let currentProto = obj
	let descriptor

	while (currentProto) {
		descriptor = Object.getOwnPropertyDescriptor(currentProto, key)

		if (descriptor) {
			;(descriptor as DescriptorWithOwner).owner = currentProto
			return descriptor as DescriptorWithOwner
		}

		currentProto = (currentProto as any).__proto__
	}

	return void 0
}