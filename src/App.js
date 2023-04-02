import "./App.css";
import { Bar, Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Legend,
	Tooltip,
	BarElement,
} from "chart.js";
import { UserData } from "./Data";
import { useState } from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
// import dog from "./objects/dog1.svg";
import { ReactComponent as Doggy } from "./objects/dog1.svg";
import { ReactComponent as Cat } from "./objects/cat.svg";

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Legend,
	Tooltip
);

function App() {
	const [userData, setuserData] = useState({
		labels: UserData.map((data) => data.year),
		datasets: [
			{
				label: "Lives Saved",
				data: UserData.map((data) => data.lives),
				backgroundColor: "#97E2E7",
				borderColor: "black",
				pointBorderColor: "#97E2E7",
				tension: 0.4,
				lineColor: "red",
			},
		],
	});

	const [userData2, setuserData2] = useState({
		labels: UserData.map((data) => data.year),
		datasets: [
			{
				label: "Pets Adopted",
				data: UserData.map((data) => data.adopt),
				backgroundColor: "#97E2E7",
				borderColor: "black",
				pointBorderColor: "#97E2E7",
				tension: 0.4,
				lineColor: "red",
			},
		],
	});

	// const data = {
	// 	labels: ["2015", "2016", "2017"],
	// 	datasets: [
	// 		{
	// 			label: "Lives-Saved",
	// 			data: [3, 6, 9],
	// 			backGroundColor: "aqua",
	// 			borderColor: "black",
	// 			pointBorderColor: "aqua",
	// 			tension: 0.4,
	//       lineColor: "red"
	// 		},
	// 	],
	// };

	const options = {
		plugins: {
			legend: false,
		},

		scales: {
			y: {
				// beginAtZero: true
				// min: 3,
				// max: 18,
			},
		},
	};

	const option2 = {
		indexAxis: "y",
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const dataHorBar = {
		labels: [
			"Labradror",
			"Pit",
			"Hound",
			"Shepherd",
			"Terrier",
			"American",
			"Catahoula",
		],
		datasets: [
			{
				label: "Top 10 Breeds",
				backgroundColor: "#97E2E7",
				borderColor: "#97E2E7",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
				data: [65, 59, 80, 81, 56, 55, 40],
			},
		],
	};

	const dataHorBar2 = {
		labels: ["Puppy", "Adult", "Senior"],
		datasets: [
			{
				label: "Top 10 Breeds",
				backgroundColor: "#97E2E7",
				borderColor: "#97E2E7",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
				data: [30, 85, 103],
			},
		],
	};

	const options3 = {
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<>
			<div
				className="heading"
				style={{
					paddingTop: "50px",
					paddingBottom: "80px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<p className="header" style={{ fontWeight: "800" }}>
					Last Hope K9
					<p className="sub-header">
						Where a last hope
						<br></br>
						becomes a <span className="text-underline">new beginning</span>
					</p>
				</p>
				{/* <img src="./objects/cat.svg"></img> */}
				<Doggy width="200px" height="200px" />
				{/* <Cat width="200px" height="200px" />
				<Doggy width="200px" height="200px" /> */}
				<Cat width="200px" height="200px" />
				<Doggy width="200px" height="200px" />
        <Cat width="200px" height="200px" />
			</div>
			<div class="container">
				<div class="section">
					<Section1 />
					<Line
						style={{ height: "700px", width: "400px" }}
						data={userData}
						options={options}
					/>
				</div>
				<div className="divider"></div>
				<div class="section">
					<Section2 />
					<p className="sub-header-2">Avg Time to Adopt by Age Bucket</p>
					<Bar data={dataHorBar2} options={option2} />
					<div style={{ paddingBottom: "30px" }} />
					<p className="sub-header-2">Avg Time to Adopt over Time</p>
					<Line data={userData2} options={options} />
				</div>
				<div className="divider2"></div>
				<div className="divider"></div>

				<div class="section">
					<Section3 />
					<Bar data={dataHorBar} options={option2} />
				</div>
			</div>
		</>
	);
}

export default App;
