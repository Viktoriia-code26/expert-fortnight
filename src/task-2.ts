type Currency = "USD" | "EUR" | "UAH";

function convertCurrency({ amount, currency }: { amount: number; currency: Currency }) {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 100, currency: "USD" }); // 
convertCurrency({ amount: 50, currency: "UAH" });  // 