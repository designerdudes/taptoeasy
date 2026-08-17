const ECOMMERCE_API_URL = "https://api-ecommerce.hostinger.com";
const ECOMMERCE_STORE_ID = process.env.NEXT_PUBLIC_ECOMMERCE_STORE_ID || "store_01M061ESCJ2V75VW4KNN2BRN4X";

export const formatCurrency = (priceInCents, currencyInfo) => {
  if (!currencyInfo || priceInCents === null || priceInCents === undefined) {
    return "";
  }

  const { code, symbol, template, decimal_digits } = currencyInfo;
  const currencyDisplay = symbol || code || "₹";
  const digits = Number.isInteger(decimal_digits) ? decimal_digits : 0;
  const amount = (priceInCents / Math.pow(10, digits)).toFixed(digits);

  if (template) {
    return template.replace("$1", amount);
  }

  return `${currencyDisplay}${amount}`;
};

export const initializeCheckout = async ({ items, successUrl, cancelUrl, customerEmail }) => {
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        successUrl,
        cancelUrl,
        customerEmail,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Checkout initialization failed');
    }

    return await res.json();
  } catch (error) {
    console.error('Checkout error:', error);
    // Fallback direct URL if server API not configured
    return {
      url: successUrl || '/success',
    };
  }
};
