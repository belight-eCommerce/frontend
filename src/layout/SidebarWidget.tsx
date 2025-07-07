import Link from "next/link";

export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 p-3 text-center dark:bg-white/[0.03]`}
    >

      <p className="text-gray-500 text-theme-sm dark:text-gray-400">
        Powered by <Link className="px-2 py-1 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600" href="https://belight-soft.com">Belight</Link>
      </p>
    </div>
  );
}
