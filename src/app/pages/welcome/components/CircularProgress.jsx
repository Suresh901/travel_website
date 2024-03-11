export default function CircularProgress({ label, value }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className="radial-progress text-brand w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[122px] lg:h-[122px]"
        style={{ "--value": 50 }}
        role="progressbar"
      >
        {value}%
      </div>
      <h1 className="font-bold text-[10px]">{label}</h1>
    </div>
  );
}
