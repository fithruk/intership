import { Button, ButtonGroup } from "@mui/material";
import { useThemeStore } from "../../store/useThemeStore";

const ThemeSwitcher = () => {
  const themeStore = useThemeStore();

  return (
    <ButtonGroup
      variant="contained"
      aria-label="Basic button group"
      className="flex justify-self-end"
    >
      <Button onClick={themeStore.toggle}>
        {themeStore.darkMode ? "Dark" : "Light"}
      </Button>
    </ButtonGroup>
  );
};

export default ThemeSwitcher;
