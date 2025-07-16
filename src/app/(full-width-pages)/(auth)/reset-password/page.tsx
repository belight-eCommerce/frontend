import Image from "next/image";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { QueryProvider } from "@/providers/QueryProvider";

export default function ResetPasswordPage() {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-[#232323] flex items-center justify-center py-8 px-2">
        <div className="bg-white w-full max-w-6xl rounded-md flex flex-col lg:flex-row overflow-hidden shadow-lg min-h-[600px]">
          {/* Left Image */}
          <div className="relative w-full lg:w-1/2 h-80 lg:h-auto">
            <Image
              src="/images/task/reseti.png"
              alt="Reset Password Visual"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Right Form */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 sm:p-12">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">MAALIIFU</h1>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 leading-tight">
              FORGOT YOUR PASSWORD?<br />LET’S FIX THAT
            </h2>
            <ResetPasswordForm customHeading={false} />
          </div>
        </div>
      </div>
    </QueryProvider>
  );
}
