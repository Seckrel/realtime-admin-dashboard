import { Header as MHeader, Group, Text } from "@mantine/core";
import { globalStyles } from "../../mantineStyles";
import { HEADER_HEIGHT } from "../../const";

function Header() {
  const { classes } = globalStyles();
  return (
    <MHeader height={HEADER_HEIGHT} py={"xs"} px={"xl"} sx={{ top: 0 }}>
      <Group ml={"auto"}>
        <Text size={"md"} className={classes.fontColorScheme}>
          Admin Page
        </Text>
      </Group>
    </MHeader>
  );
}

export default Header;
