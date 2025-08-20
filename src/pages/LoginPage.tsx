import { AppBackgroundImage, loginLogo } from '../assets';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-white md:flex-row">
      {/* Left Side: Login Form */}
      <div className="z-10 flex w-full flex-col items-center justify-center px-4 py-8 md:w-1/2 md:px-8 md:py-0">
        <div className="w-full max-w-md bg-white p-6">
          <img
            src={loginLogo}
            alt="DMK Logo"
            className="mx-auto mb-6 w-2/3 md:w-1/2"
          />
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                <span className="text-red-500">*</span> Phone Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                //placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                <span className="text-red-500">*</span> Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                //placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-not-allowed rounded-md border-1 border-[#00000040] bg-[#0000000a] py-2 font-normal text-[#00000040]"
              disabled
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Banner and Leaders */}
      <div
        className="relative hidden w-1/2 flex-col items-center justify-center px-8 py-8 md:flex"
        style={{
          backgroundImage: `url(${AppBackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      ></div>
    </div>
  );
}
