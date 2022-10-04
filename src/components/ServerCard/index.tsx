import { Card, Text, UnstyledButton, Badge } from "@mantine/core";
import { IData, TToogleGeneral } from "../../types";
import OnlineRing from "../OnlineRing";
import { globalStyles } from "../../mantineStyles";

interface IProps {
  serverData: IData;
  setToggleGeneral: (value: TToogleGeneral) => void;
  [key: string]: any;
}

function ServerCard(props: IProps) {
  const { serverData, setToggleGeneral, ...reProps } = props;
  const { id, name, online, today } = serverData;
  const { classes: globalClasses } = globalStyles();

  return (
    <UnstyledButton
      sx={{ width: "100%", height: "100%" }}
      onClick={() => setToggleGeneral(id)}
      {...reProps}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        shadow={"lg"}
      >
        <Card.Section sx={{}}>
          <OnlineRing online={online} today={today} />
        </Card.Section>
        <Card.Section p={20} sx={{ width: "60%", alignSelf: "stretch" }}>
          <Badge
            variant="dot"
            color={online ? "green" : "red"}
            className={globalClasses.badgeRight}
          >
            <Text size={"sm"}>{name}</Text>
          </Badge>
        </Card.Section>
      </Card>
    </UnstyledButton>
  );
}

export default ServerCard;
