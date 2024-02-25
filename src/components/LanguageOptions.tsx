import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface LanguageOption {
  id: number;
  name: string;
  label: string;
  value: string;
}

interface LanguageProps {
  onSelectChange: (option: string | null) => void;
  languages: LanguageOption[];
}

const LanguageOptions: React.FC<LanguageProps> = (props) => {
  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const selectedLanguageValue = event.target.value;
    props.onSelectChange(selectedLanguageValue);
  };

  return (
    <Select
      label="Select a language"
      placeholder={props.languages[0].name}
      className="max-w-xs m-4"
      onChange={handleSelectChange}
    >
      {props.languages.map((language) => (
        <SelectItem key={language.name} value={language.value}>
          {language.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default LanguageOptions;
