// TODO: Autobind decorator
export function Autobind(
    _target: any,
    _methodName: string,
    descriptor: PropertyDescriptor
) {
    const ogMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = ogMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
