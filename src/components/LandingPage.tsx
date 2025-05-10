import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Navbar */}
      <nav className="border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Code<span className="text-blue-600 dark:text-blue-500">Collab</span>
        </h1>
        <div className="flex items-center gap-x-2">
          <SignInButton mode="modal">
            <button className="text-sm px-4 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="text-sm px-4 py-2 bg-blue-600 text-white dark:text-black dark:bg-white rounded-md transition hover:opacity-90">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 sm:py-32">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Real-time coding. <br />
            Real collaboration.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            CodeCollab brings developers together — build, debug, and learn collaboratively on shared environments in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton mode="modal">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-x-2 hover:bg-blue-700 transition">
                Get Started <ArrowRight size={20} />
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Already have an account?
              </button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 dark:bg-zinc-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Why Choose <span className="text-blue-600 dark:text-blue-400">CodeCollab</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentor Junior Developers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Collaborate on beginner-friendly projects and guide others through hands-on mentorship and real-time assistance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Coding Sessions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stream your code, pair program, or debug live with teammates — just like sitting next to each other.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Project Setup</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get started instantly with shared containers, synced environments, and ready-to-code templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} CodeCollab. Crafted with ❤️ for developers.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
