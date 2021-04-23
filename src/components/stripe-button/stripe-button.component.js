import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IjHlRLUchfbxd73wRu8dpK3bJ7ar5egNb8Hu9lpYX0uhqm9JZoX4YXK80Yioe9nyi8L267Ta08VMmoEkDf6nzGj0065Ic6ISi';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          shippingAddress
          //image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
}

    export default StripeCheckoutButton;