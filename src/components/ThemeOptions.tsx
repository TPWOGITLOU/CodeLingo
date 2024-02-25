import { Select, SelectItem } from "@nextui-org/react";

interface ThemeOptionsProps {
  setTheme: (theme: string) => void;
}

const ThemeOptions = (props: ThemeOptionsProps): JSX.Element => {
  const themes = ["Light", "Dark", "High Contrast"];

  const handleSelectTheme: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const selectedTheme = event.target.value;
    if (selectedTheme === "Light") props.setTheme("vs");
    else if (selectedTheme === "Dark") props.setTheme("vs-dark");
    else if (selectedTheme === "High Contrast") props.setTheme("hc-black");
  };

  return (
    <Select
      label="Select a theme"
      placeholder={themes[1]}
      className="max-w-xs m-4"
      onChange={handleSelectTheme}
    >
      {themes.map((theme) => (
        <SelectItem key={theme} value={theme}>
          {theme}
        </SelectItem>
      ))}
    </Select>
  );
};

export default ThemeOptions;
