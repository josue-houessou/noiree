import React, { useState } from 'react'
import Img from '../assets/Hero.png'

const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePayment = (e) => {
    e.preventDefault()
    // fake simulation delay
    setTimeout(() => {
      setSuccess(true)
    }, 1000)
  }

  return (
    <section className='bg-black text-center py-2 px-4 w-full'>
      <p className='text-white italic text-3xl'>Eau de parfum</p>
      <h1 className='text-5xl text-[#4d260f] md:text-6xl font-serif my-4'>
        Gucci Gucci By Gucci EDP
      </h1>
      <div className='flex justify-center mt-5'>
        <img src={Img} alt='' className='w-90 object-contain' />
      </div>
      <p className='text-white mb-5 font-mono'>Unveil Your Essence.</p>
      <button
        onClick={() => setShowModal(true)}
        className='px-6 bg-[#977a36] font-medium rounded-full shadow hover:bg-[#4d260f] hover:text-white transition'
      >
        Shop Now
      </button>

      {/* Fake Payment Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
          <div className='bg-white p-8 rounded-xl w-[90%] md:w-[400px] shadow-lg relative'>
            <button
              onClick={() => setShowModal(false)}
              className='absolute top-3 right-3 text-gray-500 hover:text-black'
            >
              ✖
            </button>

            {!success ? (
              <>
                <h2 className='text-2xl font-serif mb-4'>Checkout</h2>
                <form onSubmit={handlePayment} className='space-y-4'>
                  <input
                    type='text'
                    placeholder='Name on Card'
                    className='w-full border p-3 rounded-lg'
                    required
                  />
                  <input
                    type='text'
                    placeholder='Card Number'
                    className='w-full border p-3 rounded-lg'
                    required
                  />
                  <div className='flex space-x-2'>
                    <input
                      type='text'
                      placeholder='MM/YY'
                      className='w-1/2 border p-3 rounded-lg'
                      required
                    />
                    <input
                      type='text'
                      placeholder='CVC'
                      className='w-1/2 border p-3 rounded-lg'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full bg-[#977a36] text-white py-3 rounded-lg hover:bg-[#4d260f]'
                  >
                    Pay Now
                  </button>
                </form>
              </>
            ) : (
              <div className='text-center'>
                <h2 className='text-2xl font-serif mb-4 text-green-600'>
                  ✅ Payment Successful!
                </h2>
                <p className='text-gray-600'>Thank you for your demo purchase.</p>
                <button
                  onClick={() => {
                    setShowModal(false)
                    setSuccess(false)
                  }}
                  className='mt-4 px-6 py-2 bg-black text-white rounded-lg'
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
