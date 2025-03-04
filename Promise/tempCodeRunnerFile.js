function tatkalBook() {
  return new Promise((resolve, reject) => {
    let bookingSuccess = true;
    if (bookingSuccess)
      resolve(900); // add the Amount
    else reject();
  })

  tatkalBook.then(
      (amt) =>console.log(`Thanks buddy! I have transferred the Amount ${amt} Rupess`)
    ) // template literal displayed output
    .catch(() => console.log("Thanks for trying! I will book a bus Ticket"));
}
