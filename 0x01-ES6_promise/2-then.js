export default function handleResponseFromAPI(promise) {
  return promise.then(() => {
    const res = { status: 200, body: 'success' };
    console.log('Got a response from the API');
    return res;
  })
    .catch(() => {
      console.log('Got a response from the API');
      return Error();
    });
}
