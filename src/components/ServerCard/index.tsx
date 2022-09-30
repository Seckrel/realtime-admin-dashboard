import {
  Card,
  Text,
  Group,
  Badge,
  RingProgress,
  Paper,
  Title,
} from "@mantine/core";
import { HrsToPercentage } from "../../utils/timedate.utils";

interface IOnlineDetails {
  [index: number]: number;
}

interface IData {
  id: number;
  name: string;
  online: boolean;
  lifeTimeOnline: string;
  onlineFor: number;
  offlineFor: number;
  onlineDetails: IOnlineDetails;
  [key: string | number]: any;
}

interface IOnlineRing {
  online: boolean;
  onlineFor: number;
}

const OnlineRing = ({ online, onlineFor }: IOnlineRing) => {
  const value = online ? onlineFor : 24 - onlineFor;
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

function ServerCard(props: IData) {
  const {
    id,
    name,
    online,
    lifeTimeOnline,
    onlineFor,
    offlineFor,
    onlineDetails,
    ...reProps
  } = props;
  return (
    <Paper shadow={"xl"} {...reProps}>
      <Card
        key={props.id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Card.Section sx={{ marginRight: "10px" }}>
          <Paper p={"md"} shadow="xs">
            <Group>
              <Text size="xl">{name}</Text>
              <Badge color={online ? "green" : "red"} variant="dot">
                {online ? "Online" : "Offline"}
              </Badge>
            </Group>
          </Paper>
        </Card.Section>
        <Card.Section>
          <OnlineRing online={online} onlineFor={onlineFor} />
        </Card.Section>
      </Card>
    </Paper>
  );
}

export default ServerCard;
