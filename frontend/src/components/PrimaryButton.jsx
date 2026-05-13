function PrimaryButton({ text }) {
  return (
    <button
      className="
        bg-cyan-500
        hover:bg-cyan-600
        transition
        px-8
        py-4
        rounded-xl
        font-semibold
        text-lg
        w-full
        sm:w-auto
      "
    >
      {text}
    </button>
  );
}

export default PrimaryButton;