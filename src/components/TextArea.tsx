export default function TextArea() {
  return (
    <div className=" flex w-full flex-col gap-[2px]">
      <label className="text-white_1 text-sm" htmlFor="message">
        Message
      </label>
      <textarea
        className="text-dark_blue bg-white_1 resize-none appearance-none rounded-2xl p-5 text-base font-medium focus:outline-none focus:ring-2"
        name="message"
        id="message"
        defaultValue={"50-100 employees"}
        rows={6}
      />
    </div>
  );
}
