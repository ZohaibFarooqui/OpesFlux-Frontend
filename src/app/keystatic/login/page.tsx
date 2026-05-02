import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

async function login(formData: FormData) {
  "use server";
  const password = process.env.KEYSTATIC_PASSWORD;
  const entered = formData.get("password") as string;
  if (password && entered === password) {
    (await cookies()).set("ks-auth", password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });
    const from = formData.get("from") as string | null;
    redirect(from || "/keystatic");
  }
}

export default async function KeystaticLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; error?: string }>;
}) {
  const { from, error } = await searchParams;

  return (
    <div className="min-h-screen bg-[#0A2540] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.png" alt="OpesFlux" width={64} height={64} className="object-contain mb-4" />
          <h1 className="text-white text-2xl font-bold">OpesFlux Blog CMS</h1>
          <p className="text-white/50 text-sm mt-1">Enter your admin password to continue</p>
        </div>
        <form action={login} className="space-y-4">
          <input type="hidden" name="from" value={from || "/keystatic"} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            autoFocus
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#20B5A2] transition-colors"
          />
          {error && (
            <p className="text-red-400 text-sm text-center">Incorrect password</p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white transition-all"
            style={{ background: "linear-gradient(135deg, #1E6AB5, #20B5A2)" }}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
