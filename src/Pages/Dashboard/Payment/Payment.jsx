import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


//Todo: add publisher key 
const sripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please pay to eat."}></SectionTitle>
            <div>
               <Elements stripe={sripePromise}>
                <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
      
          
    );
};

export default Payment;