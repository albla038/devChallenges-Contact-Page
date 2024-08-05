import Button from "./components/Button";
import DropdownField from "./components/DropdownField";
import Header from "./components/Header";
import InputField from "./components/InputField";
import TextArea from "./components/TextArea";

const inputFieldData = [
  {
    label: "Name",
    text: "Ethan Johnson",
  },
  {
    label: "Company Email",
    text: "ethan@johnson.com",
  },
];

const dropdownFieldData = [
  {
    label: "Company Size",
    options: [
      "50-100 employees",
      "100-250 employees",
      "250-500 employees",
      "500-1000 employees",
    ],
  },

  {
    label: "Subject",
    options: [
      "Building Landing pages",
      "Building React apps",
      "Building Next.JS websites",
    ],
  },
];

function App() {
  return (
    <div className="relative mx-auto max-h-[1148px] min-h-screen max-w-[1280px] bg-[url('./assets/bg-image.svg')] pb-12">
      <img
        src="src/assets/contact-form-icon.svg"
        alt="Logo"
        className="absolute left-5 top-5"
      />

      <Header />

      <form
        className="bg-white_2/20 mx-4 flex flex-col flex-wrap items-center gap-4 rounded-3xl px-8 pb-12 pt-6 lg:flex-row xl:mx-auto xl:max-w-[832px]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputField data={inputFieldData[0]} id="name" name="name" />

        <InputField data={inputFieldData[1]} id="email" name="email" />

        <DropdownField
          data={dropdownFieldData[0]}
          id="company_size"
          name="company_size"
        />

        <DropdownField
          data={dropdownFieldData[1]}
          id="subject"
          name="subject"
        />

        <TextArea />

        <Button>Contact Sales</Button>
      </form>
    </div>
  );
}

export default App;
