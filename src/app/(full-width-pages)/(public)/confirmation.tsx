import Image from "next/image";


export default function ConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4">
      <div className="mt-12 mb-6">
        <Image
          src="/images/product/image.png"
          alt="Thank You Illustration"
          width={350}
          height={200}
          priority
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Order Has Been Placed.</h1>
      <p className="text-base md:text-lg text-center text-gray-600">You will successfully receive your order in working Days</p>
    </div>
  );
} 