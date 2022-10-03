import { IBreadCrumbsItems, TToogleGeneral } from "../../types";
import { Text, UnstyledButton, Box } from "@mantine/core";
import { useState, useMemo } from "react";

interface IProps {
  items: IBreadCrumbsItems[];
  currentIndex: number;
  setCurrentIndex: (value: TToogleGeneral) => void;
}

const CText = ({
  children,
  ...rest
}: {
  children: string;
  [key: string]: any;
}) => (
  <Text size={"md"} weight={"bold"} transform={"capitalize"} {...rest}>
    {children}
  </Text>
);

function BreadCrumbs(props: IProps) {
  const { items, currentIndex, setCurrentIndex } = props;
  const valueMemo = useMemo(
    () => items.find((ele) => ele.id === currentIndex),
    [items]
  );
  const [title, _] = useState(valueMemo?.title || "");
  return (
    <Box
      sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
    >
      <UnstyledButton onClick={() => setCurrentIndex("General")}>
        <CText color={"blue"}>home</CText>
      </UnstyledButton>
      <Text px={5} size={"xs"}>
        /
      </Text>
      <CText>{title}</CText>
    </Box>
  );
}

export default BreadCrumbs;
