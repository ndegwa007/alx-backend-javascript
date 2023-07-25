export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
      reject(Error());
    }
  }).then(() => {
    console.log('Got a response from the API');
  });
}
