import { RingProgress, Title, Text } from "@mantine/core";
import { HrsToPercentage } from "../../utils/timedate.utils";

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

export default OnlineRing;
