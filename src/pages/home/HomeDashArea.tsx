import ServerCard from "../../components/ServerCard";
import { Paper, Box, createStyles } from "@mantine/core";
import { PolarArea } from "react-chartjs-2";

const CIRCLE_WIDTH = "750px";
const CIRCLE_HEIGHT = "750px";

const useStyles = createStyles((theme, _params) => ({
  circleWrapper: {
    position: "relative",
    border: "2px dotted #000000",
    borderRadius: "50%",
    width: CIRCLE_WIDTH,
    height: CIRCLE_HEIGHT,
    display: "flex",
  },
  circle: {
    display: "block",
    position: "absolute",
    top: "51%",
    margin: "-51px",
    textAlign: "center",
    lineHeight: "100px",
  },
  circleRight: {
    left: "51%",
  },
  circleLeft: {
    right: "51%",
  },
  circleCenter: {
    left: "35%",
  },
  deg0: {
    transform: `rotate(46deg) translate(calc(${CIRCLE_WIDTH} / 2)) rotate(-46deg)`,
  },
  deg45: {
    transform: `rotate(91deg) translate(calc(${CIRCLE_WIDTH} / 2)) rotate(-91deg)`,
  },
  deg135: {
    transform: `rotate(136deg) translate(calc(${CIRCLE_WIDTH} / 2)) rotate(-136deg)`,
  },
  deg180: {
    transform: `rotate(181deg) translate(calc(${CIRCLE_WIDTH} / 2)) rotate(-181deg)`,
  },
  deg225: {
    transform: `rotate(226deg) translate(calc(${CIRCLE_WIDTH} / 2)) rotate(-226deg)`,
  },
  deg270: {
    transform: `rotate(271deg) translate(calc(${CIRCLE_WIDTH} / 2)) rotate(-271deg)`,
  },
  deg315: {
    transform: `rotate(316deg) translate(calc(${CIRCLE_WIDTH} / 2)) rotate(-316deg)`,
  },
  deg360: {
    transform: `rotate(361deg) translate(calc(${CIRCLE_WIDTH} / 2)) rotate(-360deg)`,
  },
}));

const Data = [
  {
    id: 0,
    name: "Server 1",
    online: true,
    onlineDetails: [22.2, 11.3, 21.6, 2, 5.4, 14.7, 24],
    lifeTimeOnline: "72.3%",
    onlineFor: 1.1,
    offlineFor: -1,
  },
  {
    id: 1,
    name: "Server 2",
    online: true,
    onlineDetails: [11, 11.3, 21.6, 2, 5.4, 14.7, 24],
    lifeTimeOnline: "80.3%",
    onlineFor: 2.5,
    offlineFor: -1,
  },
  {
    id: 2,
    name: "Server 3",
    online: false,
    onlineDetails: [23, 11.3, 21.6, 2, 5.4, 14.7, 24],
    lifeTimeOnline: "25.3%",
    onlineFor: -1,
    offlineFor: 1,
  },
  {
    id: 3,
    name: "Server 4",
    online: false,
    onlineDetails: [22.2, 11.3, 21.6, 2, 5.4, 14.7, 24],
    lifeTimeOnline: "90.3%",
    onlineFor: -1,
    offlineFor: 1.1,
  },
  {
    id: 4,
    name: "Server 5",
    online: true,
    onlineDetails: [12.5, 11.3, 21.6, 2, 5.4, 14.7, 24],
    lifeTimeOnline: "52.3%",
    onlineFor: 10,
    offlineFor: -1,
  },
  {
    id: 5,
    name: "Server 6",
    online: true,
    onlineDetails: [8, 11.3, 21.6, 2, 5.4, 14.7, 24],
    lifeTimeOnline: "82.3%",
    onlineFor: 12,
    offlineFor: -1,
  },
  {
    id: 6,
    name: "Server 7",
    online: false,
    onlineDetails: [22.2, 11.3, 21.6, 2, 5.4, 14.7, 24],
    lifeTimeOnline: "68.3%",
    onlineFor: -1,
    offlineFor: 0.3,
  },
  {
    id: 7,
    name: "Server 8",
    online: true,
    onlineDetails: [12.2, 11.3, 21.6, 2, 5.4, 14.7, 24],
    lifeTimeOnline: "72.3%",
    onlineFor: 5.2,
    offlineFor: -1,
  },
];

interface IProps {
  state: number;
}

function HomeDashArea(props: IProps) {
  const { classes, cx } = useStyles();
  const { state } = props;
  const temp_data = {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          Data[0].onlineDetails[state],
          Data[1].onlineDetails[state],
          Data[2].onlineDetails[state],
          Data[3].onlineDetails[state],
          Data[4].onlineDetails[state],
          Data[5].onlineDetails[state],
          Data[6].onlineDetails[state],
          Data[7].onlineDetails[state]
        ],
        hoverBackgroundColor: "white",
        hoverBorderColor: "rgba(0,0,0,0.4)",
        hoverBorderWidth: 1,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(86, 99, 235)",
          "rgb(192, 75, 255)",
          "rgb(203, 192, 86)",
        ],
      },
    ],
  };

  return (
    <Paper className="flex-center p-xs" shadow={"xs"}>
      <Box className={classes.circleWrapper}>
        <ServerCard
          id={Data[0].id}
          name={Data[0].name}
          online={Data[0].online}
          onlineDetails={Data[0].onlineDetails}
          lifeTimeOnline={Data[0].lifeTimeOnline}
          onlineFor={Data[0].onlineDetails[state]}
          offlineFor={Data[0].offlineFor}
          className={cx(classes.circle, classes.deg0, classes.circleRight)}
        />
        <ServerCard
          id={Data[1].id}
          name={Data[1].name}
          online={Data[1].online}
          onlineDetails={Data[1].onlineDetails}
          lifeTimeOnline={Data[1].lifeTimeOnline}
          onlineFor={Data[1].onlineDetails[state]}
          offlineFor={Data[1].offlineFor}
          className={cx(classes.circle, classes.deg45, classes.circleCenter)}
        />
        <ServerCard
          id={Data[2].id}
          name={Data[2].name}
          online={Data[2].online}
          onlineDetails={Data[2].onlineDetails}
          lifeTimeOnline={Data[2].lifeTimeOnline}
          onlineFor={Data[2].onlineDetails[state]}
          offlineFor={Data[2].offlineFor}
          className={cx(classes.circle, classes.deg135, classes.circleLeft)}
        />
        <ServerCard
          id={Data[3].id}
          name={Data[3].name}
          online={Data[3].online}
          onlineDetails={Data[3].onlineDetails}
          lifeTimeOnline={Data[3].lifeTimeOnline}
          onlineFor={Data[3].onlineDetails[state]}
          offlineFor={Data[3].offlineFor}
          className={cx(classes.circle, classes.deg180, classes.circleLeft)}
        />
        <ServerCard
          id={Data[4].id}
          name={Data[4].name}
          online={Data[4].online}
          onlineDetails={Data[4].onlineDetails}
          lifeTimeOnline={Data[4].lifeTimeOnline}
          onlineFor={Data[4].onlineDetails[state]}
          offlineFor={Data[4].offlineFor}
          className={cx(classes.circle, classes.deg225, classes.circleLeft)}
        />
        <ServerCard
          id={Data[5].id}
          name={Data[5].name}
          online={Data[5].online}
          onlineDetails={Data[5].onlineDetails}
          lifeTimeOnline={Data[5].lifeTimeOnline}
          onlineFor={Data[5].onlineDetails[state]}
          offlineFor={Data[5].offlineFor}
          className={cx(classes.circle, classes.deg270, classes.circleCenter)}
        />
        <ServerCard
          id={Data[6].id}
          name={Data[6].name}
          online={Data[6].online}
          onlineDetails={Data[6].onlineDetails}
          lifeTimeOnline={Data[6].lifeTimeOnline}
          onlineFor={Data[6].onlineDetails[state]}
          offlineFor={Data[6].offlineFor}
          className={cx(classes.circle, classes.deg315, classes.circleRight)}
        />
        <ServerCard
          id={Data[7].id}
          name={Data[7].name}
          online={Data[7].online}
          onlineDetails={Data[7].onlineDetails}
          lifeTimeOnline={Data[7].lifeTimeOnline}
          onlineFor={Data[7].onlineDetails[state]}
          offlineFor={Data[7].offlineFor}
          className={cx(classes.circle, classes.deg360, classes.circleRight)}
        />
        <div
          style={{
            width: "75%",
            height: "75%",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <PolarArea data={temp_data} />
        </div>
      </Box>
    </Paper>
  );
}

export default HomeDashArea;
