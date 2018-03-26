/**
 * Add toHaveProperties matcher to jest
 * to check for multiple properties inside
 * an object
 */
export default {
  toHaveProperties(received, args) {
    const receivedProperties = Object.getOwnPropertyNames(received);
    const pass = !args.some(val => receivedProperties.indexOf(val) === -1);
    if (pass) {
      return {
        message: () => `expected ${received} not to have properties of ${args}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to have properties of ${args}`,
        pass: false,
      };
    }
  },
};
