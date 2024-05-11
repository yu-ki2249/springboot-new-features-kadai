const stripe = Stripe('pk_test_51PEYk42MG4rbe2oT1p2vksRTShOUndvixj7onc8O74aOlocpjwMTw4uyg9a0QmFxbRftLcIEOtoARqarqmNIOhl200mrpj9gif');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });