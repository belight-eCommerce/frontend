export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Shipping Information */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-gray-700">First Name</label>
              <input id="firstName" name="firstName" placeholder="Enter Name" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-gray-700">Last Name</label>
              <input id="lastName" name="lastName" placeholder="Enter Name" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" placeholder="Enter Email" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone</label>
              <input id="phone" name="phone" placeholder="Enter Phone" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-gray-700">Address</label>
              <input id="address" name="address" placeholder="Enter Address" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-gray-700">City</label>
              <input id="city" name="city" placeholder="Enter City" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="zip" className="mb-1.5 block text-sm font-medium text-gray-700">Zip</label>
              <input id="zip" name="zip" placeholder="Enter Zip" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-gray-700">Country</label>
              <select id="country" name="country" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm text-gray-800">
                <option value="">Select</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="cardName" className="mb-1.5 block text-sm font-medium text-gray-700">Cardholder Name</label>
              <input id="cardName" name="cardName" placeholder="Enter Name" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="cardNumber" className="mb-1.5 block text-sm font-medium text-gray-700">Card Number</label>
              <input id="cardNumber" name="cardNumber" placeholder="Enter Card Number" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="expiry" className="mb-1.5 block text-sm font-medium text-gray-700">Expiry</label>
              <input id="expiry" name="expiry" placeholder="Enter Expiry" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
            <div>
              <label htmlFor="cvv" className="mb-1.5 block text-sm font-medium text-gray-700">CVV</label>
              <input id="cvv" name="cvv" placeholder="Enter CVV" className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400" />
            </div>
          </div>
          <div className="mt-8">
            <button className="w-full md:w-auto px-10 py-3 bg-blue-900 text-white rounded-full font-medium text-lg shadow hover:bg-blue-800 transition">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}