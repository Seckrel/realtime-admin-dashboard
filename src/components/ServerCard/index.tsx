import {
  Card,
  Text,
  RingProgress,
  UnstyledButton,
  Title,
  Badge,
} from "@mantine/core";
import { HrsToPercentage } from "../../utils/timedate.utils";
import { IData, TToogleGeneral } from "../../types";

interface IOnlineRing {
  online: boolean;
  today: number;
}

const OnlineRing = ({ online, today }: IOnlineRing) => {
  const value = online ? today : 24 - today;
  const color = online ? "green" : "red";

  return (
    <RingProgress
      size={120}
      thickness={12}
      roundCaps
      sections={[{ value: HrsToPercentage(value), color: color }]}
      label={
        <>
          <Title size={8} align="center" color={online ? "green" : "red"}>
            {online ? "Online for" : "Offline for"}
          </Title>
          <Text size={"md"} align="center" color={online ? "green" : "red"}>
            {value.toFixed(1).toString()} Hrs
          </Text>
        </>
      }
    />
  );
};

interface IProps {
  serverData: IData;
  setToggleGeneral: (value: TToogleGeneral) => void;
  [key: string]: any;
}

function ServerCard(props: IProps) {
  const { serverData, setToggleGeneral, ...reProps } = props;
  const { id, name, online, today } = serverData;


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
            pr={"lg"}
            sx={{
              isolation: "isolate",
              position: "relative",
              "&::before": {
                position: "absolute",
                right: 0,
              },
            }}
          >
            <Text size={"sm"}>{name}</Text>
          </Badge>
        </Card.Section>
      </Card>
    </UnstyledButton>
  );
}

export default ServerCard;
