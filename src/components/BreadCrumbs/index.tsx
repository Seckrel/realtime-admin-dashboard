import { IBreadCrumbsItems, TToogleGeneral } from "../../types";
import { Text, UnstyledButton, Box, Divider } from "@mantine/core";
import { useState, useMemo } from "react";
import { globalStyles } from "../../mantineStyles";

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
  const {classes} = globalStyles();
  const valueMemo = useMemo(
    () => items.find((ele) => ele.id === currentIndex),
    [items]
  );
  const [title, _] = useState(valueMemo?.title || "");
  return (
    <Divider
      label={
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <UnstyledButton onClick={() => setCurrentIndex("General")}>
            <CText color={"blue"}>home</CText>
          </UnstyledButton>
          <Text px={5} size={"xs"} className={classes.fontColorScheme}>
            /
          </Text>
          <CText className={classes.fontColorScheme}>{title}</CText>
        </Box>
      }
      size={"sm"}
      my={20}
      variant="dotted"
    />
  );
}

export default BreadCrumbs;
