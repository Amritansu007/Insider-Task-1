function InputField({
  type = "text",
  placeholder,
  isPassword = false,
  togglePassword,
  showPassword,
}) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      {isPassword && (
  <span
    onClick={togglePassword}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 cursor-pointer hover:text-white transition"
  >
    {showPassword ? (
      // Eye OFF (hidden)
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-10-7a18.026 18.026 0 012.56-3.86M6.53 6.53A9.956 9.956 0 0112 5c5 0 9 4 10 7a18.022 18.022 0 01-4.22 5.94M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 6L3 3" />
      </svg>
    ) : (
      // Eye ON (visible)
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c-1 3-5 7-9 7s-8-4-9-7c1-3 5-7 9-7s8 4 9 7z" />
      </svg>
    )}
  </span>
)}
    </div>
  );
}

export default InputField;