export default function CustomInput({ label }: { label: string }) {
  return (
    <div className="flex-1 text-sm">
      <p className="leading-8">{label}</p>
      <input
        type="text"
        className={`w-full border border-gray03 focus:outline-none rounded px-2 leading-8 hover:shadow-input`}
      />
    </div>
  );
}
