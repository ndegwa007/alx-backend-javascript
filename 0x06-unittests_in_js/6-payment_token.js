function getPaymentTokenFromApi (success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ data: 'Successful response from the API' });
    }
  });
}

module.exports = getPaymentTokenFromApi;
