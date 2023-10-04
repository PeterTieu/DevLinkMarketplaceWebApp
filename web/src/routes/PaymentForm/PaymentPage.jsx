// import { useState } from 'react';
// import './PaymentForm.css';
// import paymentPageBanner from '../../images/payment-page-banner.png';
// import StripeContainer from './StripeContainer';
// import { useLocation } from 'react-router-dom';

// //Page to perform payment for Employment-typed Job
// function PaymentPage() {

//     //Retrieve data from PostJob.jsx
//     const location = useLocation();
//     const dataFromPostJob = location.state?.data;
//     console.log(dataFromPostJob);

//     const [showItem, setShowItem] = useState(false);

//     return (
//         <div className='App-Payment'>
//             <h1>Make a payment to post the Employment job</h1>
//             {showItem ? (
//                 //Call StripeContainer and pass data from PostJob.jsx to it
//                 <StripeContainer data={dataFromPostJob} />
//             ) : (
//                 <>
//                     <h3>$2.99</h3>
//                     <img src={paymentPageBanner} alt='Employment Jobs Banner' />
//                     <button onClick={() => setShowItem(true)}>Make the Payment</button>
//                 </>
//             )}
//         </div>
//     );
// }

// export default PaymentPage;

import { useState } from 'react';
import './PaymentForm.css';
import paymentPageBanner from '../../images/payment-page-banner.png';
import StripeContainer from './StripeContainer';
import { useLocation } from 'react-router-dom';

// Page to perform payment for Employment-typed Job
function PaymentPage() {

    // Retrieve data passed via routing from PostJob component
    const location = useLocation();
    const dataFromPostJob = location.state?.data;
    console.log(dataFromPostJob);

    // State to manage whether payment item details or Stripe payment interface should be displayed
    const [showItem, setShowItem] = useState(false);

    return (
        <div className='App-Payment'>
            <h1>Make a payment to post the Employment job</h1>
            {showItem ? (
                // Render StripeContainer and pass the job data to it for payment handling
                <StripeContainer data={dataFromPostJob} />
            ) : (
                // Display payment item details and 'Make the Payment' button to reveal Stripe payment interface on click
                <>
                    <h3>$2.99</h3>
                    <img src={paymentPageBanner} alt='Employment Jobs Banner' />
                    <button onClick={() => setShowItem(true)}>Make the Payment</button>
                </>
            )}
        </div>
    );
}

export default PaymentPage;
