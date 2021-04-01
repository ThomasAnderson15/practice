// Function definition
function calculateTotal(products, { discountPercentage, salesTax }) {
    let result = 0;
    for (let i = 0; i < products.length; i++) {
      const { priceInCents, quantity } = products[i];
      result += priceInCents * quantity;
    }
  
    if (discountPercentage) result *= 1 - discountPercentage;
    return result * (1 + salesTax);
  }
  
  // Inputs
  const products = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const city1Options = { discountPercentage: 0.1, salesTax: 0.0825 };
  const city2Options = { discountPercentage: 0.1, salesTax: 0.03 };
  
  // Function call
  calculateTotal(products, city1Options); //> 8768.25
  calculateTotal(products, city2Options); //> ???