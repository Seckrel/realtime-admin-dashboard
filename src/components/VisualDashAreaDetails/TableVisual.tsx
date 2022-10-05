import { Paper, Table } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";
import { ISubModules } from "../../types";

const THead = ({ hnames }: { hnames: string[] }) => (
  <>
    {hnames.map((hname: string) => (
      <td>{hname}</td>
    ))}
  </>
);

const TRow = ({ subModule }: any) => (
  <tr>
    <td>{subModule.id}</td>
    <td>{subModule.name}</td>
    <td>
      {subModule.active ? <IconCheck color="green" /> : <IconX color="red" />}
    </td>
    <td>{subModule.statusCode}</td>
    <td>{subModule.lastTimeChecked}</td>
    <td>{subModule.state}</td>
  </tr>
);

interface IProps {
  subModules: ISubModules[];
}

function TableVisual(props: IProps) {
  const { subModules } = props;
  return (
    <Paper shadow={"lg"} py={20}>
      <Table>
        <thead>
          <tr>
            <THead hnames={Object.keys(subModules[0])} />
          </tr>
        </thead>
        <tbody>
          {subModules.map((subModule) => (
            <TRow subModule={subModule} />
          ))}
        </tbody>
      </Table>
    </Paper>
  );
}

export default TableVisual;
