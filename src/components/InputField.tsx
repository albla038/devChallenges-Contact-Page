type InputFieldProps = {
  data: {
    label: string;
    text: string;
  };
  id: string;
  name: string;
};

export default function InputField({ data, id, name }: InputFieldProps) {
  return (
    <div className="flex w-full grow flex-col gap-[2px] lg:basis-1/3">
      <label className="text-white_1 text-sm" htmlFor={id}>
        {data.label}
      </label>
      <input
        className=" text-dark_blue placeholder:text-gray bg-white_1 rounded-2xl p-5 text-base font-medium focus:outline-none focus:ring-2"
        type="text"
        id={id}
        name={name}
        placeholder={data.text}
      />
    </div>
  );
}
