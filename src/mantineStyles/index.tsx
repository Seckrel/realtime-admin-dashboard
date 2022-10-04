import { createStyles } from "@mantine/core";

const globalStyles = createStyles((theme, _props) => ({
  fontColorScheme: {
    color:
      theme.colorScheme === "dark"
        ? theme.white
        : theme.colors.dark[theme.primaryShade?.dark],
  },
  backgroundColorScheme: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[theme.primaryShade?.dark]
        : "#f4f4f4bd;",
  },
  badgeRight: {
    isolation: "isolate",
    position: "relative",
    paddingRight: theme.spacing.lg,
    "&::before": {
      position: "absolute",
      right: 0,
    },
  },
}));

export { globalStyles };
