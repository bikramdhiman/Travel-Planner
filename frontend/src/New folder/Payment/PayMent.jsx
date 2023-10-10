import React from 'react'

export default function PayMent() {
    let laptopPrice=10000;

    const loadScript = (src) => {
        return new Promise ((resovle) => {
        const script= document.createElement('script')
        script.src = src
        script.onload = () => {
        resovle (true)
        }
        script.onerror = () => {
        resovle (false)
        }
        document.body.appendChild (script)
        })
    }

    const displayRazorpay= async (amount)=>{
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if (!res) {
            alert('You are offline... Failed to load Razorpay SDK')
            return
        }

        const options = {
            key: "rzp_test_FltPHybnYCS72A",
            currency: "INR",
            amount: amount * 100,
            name: "Hehehehehe",
            description: "Thanks for purchasing",
            image: 'https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png',

            handler: function (response) {
                alert(response.razorpay_payment_id)
                alert("Payment Successfully")
                },
                prefill: {
                name: "code with akky"
            }
            
        };

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()


    }
  return (
    
    <div className="buttons">
        <button onClick={() => displayRazorpay (laptopPrice)}>
            BUY NOW
        </button>
    </div>
  )
}
