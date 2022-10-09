import { IAlarm } from "../../types/accoundAlaram";
import { Paper, Table, Box, clsx, createStyles } from "@mantine/core";
import { Key } from "react";

interface ITBodyProps {
  alarms: IAlarm[];
  classes: Record<Key, string>;
}

interface ITHeadProps {
  hnames: string[];
}

const useStyles = createStyles((theme) => ({
  stripped: {
    backgroundColor: theme.colorScheme === "light" ? "#eee" : "#131313",
  },
}));

const GENERAL_ALARMS: IAlarm[] = [
  {
    accountName: "Acc 1",
    alaramList: [
      { name: "xyz", state: true },
      { name: "xyz", state: true },
    ],
  },
  {
    accountName: "Acc 2",
    alaramList: [{ name: "xyz", state: false }],
  },
  {
    accountName: "Acc 3",
    alaramList: [{ name: "xyz", state: false }],
  },
  {
    accountName: "Acc 3",
    alaramList: [{ name: "xyz", state: true }],
  },
  {
    accountName: "Acc 4",
    alaramList: [{ name: "xyz", state: false }],
  },
  {
    accountName: "Acc 5",
    alaramList: [{ name: "xyz", state: true }],
  },
  {
    accountName: "Acc 6",
    alaramList: [{ name: "xyz", state: true }],
  },
  {
    accountName: "Acc 7",
    alaramList: [{ name: "xyz", state: true }],
  },
];

const THead = ({ hnames }: ITHeadProps) => (
  <thead>
    {hnames.map((hname) => (
      <Box component="th" py={"lg"}>
        {hname}
      </Box>
    ))}
  </thead>
);

const TBody = ({ alarms, classes }: ITBodyProps) => (
  <tbody>
    {alarms.map((alarm, index) => (
      <>
        <tr
          key={index}
          className={clsx({
            [classes.stripped]: index % 2 === 0,
          })}
        >
          <td rowSpan={alarm.alaramList.length + 1}>{alarm.accountName}</td>
        </tr>
        {alarm.alaramList.map((alarmState) => (
          <tr
            className={clsx({
              [classes.stripped]: index % 2 === 0,
            })}
          >
            <td>{alarmState.name}</td>
            <td>{alarmState.state ? "true" : "false"}</td>
          </tr>
        ))}
      </>
    ))}
  </tbody>
);

function AccountAlarms() {
  const { classes } = useStyles();
  return (
    <Paper>
      <Table verticalSpacing={"xl"} highlightOnHover>
        <THead hnames={Object.keys(GENERAL_ALARMS[0].alaramList[0])} />
        <TBody alarms={GENERAL_ALARMS} classes={classes} />
      </Table>
    </Paper>
  );
}

export default AccountAlarms;
