import React, { useState } from "react"
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs"
import OtpInput from "otp-input-react"
import './EnterOTP.css'
import { CgSpinner } from 'react-icons/cg'


const EnterOTP = (props) => {

    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)


    return (
        <section className="verify-phone-number-section bg-emerald-500 flex items-center justify-center h-screen">

            <div>
                <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                    <h1 className="text-center leading-normal text-black font-medium text-3xl mb-6">
                        Verify Your OTP
                    </h1>

                    {/* <>
                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                            <BsFillShieldLockFill size={30} />
                        </div>

                        <label htmlFor="ph" className="font-bold text-2xl text-black text-center">
                            Enter your OTP
                        </label>

                        <OtpInput
                            className="otp-input-container"
                            value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            autoFocus
                        ></OtpInput>

                        <button className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-black rounded">
                            {loading &&
                                <CgSpinner size={20} className="mt-1 animate-spin" />
                            }

                            <span>Verify OTP</span>
                        </button>
                    </> */}

                    <>
                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                            <BsTelephoneFill size={30} />
                        </div>

                        <label htmlFor="ph" className="font-bold text-2xl text-black text-center">
                            Enter the OTP
                        </label>

                        <OtpInput
                            className="otp-input-container"
                            value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            autoFocus
                        ></OtpInput>

                        <button className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-black rounded">
                            {loading &&
                                <CgSpinner size={20} className="mt-1 animate-spin" />
                            }

                            <span>Verify OTP</span>
                        </button>
                    </>


                </div>
            </div>

        </section>
    )
}

export default EnterOTP