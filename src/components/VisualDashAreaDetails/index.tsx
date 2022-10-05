import { Card, Paper, Box, Text, Badge, Group, Stack } from "@mantine/core";
import { IData } from "../../types";
import { globalStyles } from "../../mantineStyles";
import OnlineRing from "../OnlineRing";
import TableVisual from "./TableVisual";
import BarGraphChart from "./BarGraphChart";

interface IProps {
  data: IData;
}

function VisualDashAreaDetails({ data }: IProps) {
  const { name, id, lastSevenDay, online, today, subModules } = data;
  const { classes } = globalStyles();

  return (
    <Box mt={20} key={id}>
      <Group
        position={"apart"}
        grow
        sx={{ display: "flex", alignItems: "start" }}
      >
        <TableVisual subModules={subModules} />
        <Stack align={"center"}>
          <Paper mr={"auto"} shadow={"lg"} py={20} sx={{ width: "400px" }}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "start",
              }}
            >
              <Card.Section>
                <OnlineRing online={online} today={today} />
              </Card.Section>
              <Card.Section>
                <Paper shadow={"xl"}>
                  <Badge
                    variant="dot"
                    color={online ? "green" : "red"}
                    className={classes.badgeRight}
                  >
                    <Text size={"md"}>{name}</Text>
                  </Badge>
                </Paper>
              </Card.Section>
            </Card>
          </Paper>
          <BarGraphChart data={data} />
        </Stack>
      </Group>
    </Box>
  );
}

export default VisualDashAreaDetails;
