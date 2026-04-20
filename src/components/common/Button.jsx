function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full py-2.5 rounded-lg font-medium text-white
        bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500
        
        transition-all duration-300 ease-out
        
        hover:scale-[1.02]
        hover:shadow-lg hover:shadow-indigo-500/30
        
        active:scale-[0.98]
      "
    >
      {text}
    </button>
  );
}

export default Button;