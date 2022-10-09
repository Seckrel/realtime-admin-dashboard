import { IAlarm } from "../../types/accoundAlaram";
import { Paper, Table, Box } from "@mantine/core";

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

const THead = ({ hnames }: { hnames: string[] }) => (
  <thead>
    {hnames.map((hname) => (
      <Box component="th" py={"lg"}>
        {hname}
      </Box>
    ))}
  </thead>
);

const TBody = ({ alarms }: { alarms: IAlarm[] }) => (
  <tbody>
    {alarms.map((alarm, index) => (
      <>
        <tr key={index}>
          <td colSpan={3}>{alarm.accountName}</td>
        </tr>

        {alarm.alaramList.map((alarmState) => (
          <tr>
            <td>{alarmState.name}</td>
            <td>{alarmState.state ? "true" : "false"}</td>
          </tr>
        ))}
      </>
    ))}
  </tbody>
);

function AccountAlarms() {
  return (
    <Paper>
      <Table verticalSpacing={"xl"} striped highlightOnHover>
        <THead hnames={Object.keys(GENERAL_ALARMS[0].alaramList[0])} />
        <TBody alarms={GENERAL_ALARMS} />
      </Table>
    </Paper>
  );
}

export default AccountAlarms;
