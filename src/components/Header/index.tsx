import { Header as MHeader, Group, Text } from "@mantine/core";

function Header() {
  return (
    <MHeader height={70} py={"xs"} px={"xl"} sx={{ top: 0 }}>
      <Group ml={"auto"}>
        <Text>Admin Page</Text>
      </Group>
    </MHeader>
  );
}

export default Header;
