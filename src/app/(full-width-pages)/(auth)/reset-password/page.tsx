import Image from "next/image";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Toaster } from "react-hot-toast";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-[#232323] flex items-center justify-center py-8 px-4 sm:px-8">
      <Toaster position="top-center" />
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          <Image
            src="/images/task/reseti.png"
            alt="Reset Password Visual"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 sm:px-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-3">MAALIIFU</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 leading-snug">
            FORGOT YOUR PASSWORD? <br className="hidden sm:block" />
            LET’S FIX THAT.
          </h2>

          <ResetPasswordForm customHeading={false} />
        </div>
      </div>
    </div>
  );
}
