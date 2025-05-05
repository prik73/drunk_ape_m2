import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple navbar for not logged in users */}
      <nav className="border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Your App</h1>
        </div>
        <div className="flex items-center gap-x-2">
          <SignInButton mode="modal">
            <button className="text-sm px-4 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="text-sm px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md transition hover:opacity-90">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero section */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-blue-600 dark:text-blue-500">Your App</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your app description goes here. This is where you explain what your application does and why users should sign up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton mode="modal">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-medium flex items-center justify-center gap-x-2 hover:bg-blue-700 transition">
                Get Started
                <ArrowRight size={20} />
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-md text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Already have an account?
              </button>
            </SignInButton>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Feature One</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Description of your first amazing feature goes here.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Feature Two</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Description of your second amazing feature goes here.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Feature Three</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Description of your third amazing feature goes here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Your App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;