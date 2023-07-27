export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('Cannot divide by 0');
    }
    const div = numerator / denominator;
    return div;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
