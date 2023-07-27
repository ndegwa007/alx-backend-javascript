export default function guardrail(mathFunction) {
  const queue = [mathFunction()];
  const msg = 'Guardrail was processed';
  queue.push(msg);
  return queue;
}
