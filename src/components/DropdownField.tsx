type DropdownFieldProps = {
  data: {
    label: string;
    options: string[];
  };
  id: string;
  name: string;
};

export default function DropdownField({ data, id, name }: DropdownFieldProps) {
  return (
    <div className="flex w-full grow flex-col gap-[2px] lg:basis-1/3">
      <label className="text-white_1 text-sm" htmlFor={id}>
        {data.label}
      </label>
      <div className="relative text-base font-medium">
        <select
          className="text-dark_blue placeholder:text-gray bg-white_1 w-full appearance-none rounded-2xl p-5 focus:outline-none focus:ring-2"
          id={id}
          name={name}
        >
          {data.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <img
          src="/Expand_down.svg"
          alt="Expand arrow"
          className="pointer-events-none absolute inset-y-1/2 right-5 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
