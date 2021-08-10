declare function validate(key: string, value: string): boolean;
declare const regular: {
    validate: typeof validate;
};
export default regular;
