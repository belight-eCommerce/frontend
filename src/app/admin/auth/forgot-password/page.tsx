export default function ForgotPasswordForm() {
  try {
    console.log("ForgotPasswordForm rendered ✅");
    return <div>Form goes here</div>; // your real form code
  } catch (err) {
    console.error("❌ ForgotPasswordForm failed:", err);
    return <div>Error in form</div>;
  }
}
