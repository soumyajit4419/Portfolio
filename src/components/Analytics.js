import { useAnalytics } from "use-analytics";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Pie, Bar, Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Particle from "./Particle";
let colors4 = [
  "#49A9EA",
  "#36CAAB",
  "#34495E",
  "#B370CF",
  "#AC5353",
  "#CFD4D8",
];
const labels = ["January", "February", "March", "April", "May", "June"];
const Analytics = (props) => {
  const [dailyData, setDailyData] = useState([]);
  const [evalValue, setEvalValue] = useState("alert('put stuff here')");

  const fetchApi = async () => {
    const dailyData = await fetch(
      `${
        process.env.REACT_APP_PRODUCTION_ANALYTICS_URL &&
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_PRODUCTION_ANALYTICS_URL
          : "http://localhost:8080/"
      }getdata`,
      {
        headers: {
          Authorization: process.env.REACT_APP_PASSWORD,
        },
      }
    ).then((res) => res.json());
    console.debug(dailyData, "e");
    setDailyData(dailyData);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  const data = {
    labels: dailyData ? dailyData.labels : ["Loading...", "Please wait"],
    datasets: [
      {
        label: "My First dataset",
        data: dailyData ? dailyData.numbers : [0, 10, 5, 2, 20, 30, 45],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // const Linedata =  ;
  const { track, page, identify } = useAnalytics();
  identify("userID", { email: "bob@bob.com" });
  return (
    <div>
      <Container
        fluid
        className="resume-section"
        style={{ height: `${1860 + window.innerHeight}px` }}
      >
        <Container>
          {/* <Row> */}
          <button onClick={() => track("trackThing")}>Track event</button>
          <button onClick={() => page()}>Trigger page view</button>
          <button onClick={() => identify("userID", { email: "bob@bob.com" })}>
            Trigger identify visitor
          </button>
          {/* </Row> */}
          <br />
          {dailyData ? (
            <>
              <Row>
                <Col md={6}>
                  <Pie
                    width={10}
                    height={10}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                    }}
                    data={data}
                  />
                </Col>
                <Col md={6}>
                  <Bar
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                    }}
                    data={{
                      labels: dailyData.urls?.labels,
                      datasets: [
                        {
                          label: "Requests",
                          backgroundColor: "rgb(255, 99, 132)",
                          borderColor: "rgb(255, 99, 132)",
                          data: dailyData.urls?.numbers,
                        },
                      ],
                    }}
                    width={10}
                    height={10}
                  ></Bar>
                </Col>
              </Row>
              <Row>
                {" "}
                <Col md={6}>
                  <Line
                    data={{
                      backgroundColor: "red",
                      labels: dailyData.ips?.labels,
                      datasets: [
                        {
                          label: "# requests ",
                          data: dailyData.ips?.numbers,
                          borderWidth: 3,
                          fill: false,
                          borderColor: "green",
                        },
                      ],
                    }}
                  />
                </Col>
                <br />
                <Col md={6}>
                  <h1> Blocked IP's</h1>
                  <ul>
                    {dailyData.blocked?.data.map((e, i) => {
                      return (
                        <li key={i}>
                          {e.ip} - {e.reason}
                        </li>
                      );
                    })}
                  </ul>
                  <br />
                  <button
                    onClick={() => {
                      let ip = prompt("IP:");
                      let reason = prompt("Reason:") || undefined;
                      if (!ip) return alert("Please enter an IP address");
                      fetch("http://localhost:8080/block_ip", {
                        method: "POST",
                        headers: {
                          "Content-type": "application/json",
                          Authorization: process.env.REACT_APP_PASSWORD,
                        },
                        body: JSON.stringify({ ip, reason }),
                      }).then((r) => {
                        if (r.status === 201) {
                          return alert("IP Blocked");
                        }
                        fetchApi();
                      });
                    }}
                  >
                    {" "}
                    block ip{" "}
                  </button>{" "}
                  &nbsp;{" "}
                  <button
                    onClick={() => {
                      let ip = prompt("IP:");
                      let reason = prompt("Reason:") || undefined;
                      if (!ip) return alert("Please enter an IP address");
                      fetch("http://localhost:8080/unblock_ip", {
                        method: "DELETE",
                        headers: {
                          "Content-type": "application/json",
                          Authorization: process.env.REACT_APP_PASSWORD,
                        },
                        body: JSON.stringify({ ip, reason }),
                      }).then((r) => {
                        if (r.status === 200) {
                          return alert("IP unBlocked");
                        }
                        fetchApi();
                      });
                    }}
                  >
                    {" "}
                    unblock ip{" "}
                  </button>
                </Col>
                <br />
                <br />
                <br />
                <br />
                <Col md={6}>
                  <h1> Refferers</h1>
                  <br />
                  <Doughnut
                    data={{
                      backgroundColor: "red",
                      labels: dailyData.refs?.label.map((v) =>
                        v === null ? "None" : v
                      ),
                      datasets: [
                        {
                          label: "# requests ",
                          data: dailyData.refs?.numbers,
                          backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                          ],
                          borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    width={50}
                    height={50}
                  ></Doughnut>
                </Col>
                <Col md={6}>
                  <h1> All Refferers used</h1>
                  <ul>
                    {dailyData.refs?.label.map((label, index) => {
                      let amount = dailyData.refs.numbers[index];
                      return (
                        <li key={index}>
                          {label} - {amount} <br />{" "}
                          <button
                            onClick={() => {
                              var url = new URL(window.location.href);
                              var search_params = url.searchParams;

                              // new value of "id" is set to "101"
                              if (label != "No Ref")
                                search_params.set("ref", label);
                              else search_params.delete("ref");
                              url.search = search_params.toString();

                              window.location = url.toString();
                            }}
                          >
                            {" "}
                            Use this reffer{" "}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={6}>
                  <h1> Socket connections</h1>
                  <br />
                  <ul>
                    {" "}
                    {dailyData.connectedClients?.map((id) => {
                      return <li key={id}>{id}</li>;
                    })}
                  </ul>
                </Col>
                <Col md={6}>
                  <CodeMirror
                    value={evalValue}
                    height="400px"
                    extensions={[javascript({ jsx: true })]}
                    theme={githubDark}
                    onChange={(value, viewUpdate) => {
                      setEvalValue(value);
                    }}
                  />
                  <br />
                  <button
                    onClick={() => {
                      const id = prompt("Socket ID");
                      fetch(
                        `${
                          process.env.REACT_APP_PRODUCTION_ANALYTICS_URL &&
                          process.env.NODE_ENV === "production"
                            ? process.env.REACT_APP_PRODUCTION_ANALYTICS_URL
                            : "http://localhost:8080/"
                        }clients/${id}/eval`,
                        {
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: process.env.REACT_APP_PASSWORD,
                          },
                          method: "POST",
                          body: JSON.stringify({
                            data: evalValue.toString(),
                          }),
                          mode: "cors",
                        }
                      )
                        .then((r) => r.json())
                        .then(({ data }) => {
                          alert(`\n${data}\n`);
                        });
                    }}
                  >
                    Submit
                  </button>
                </Col>
              </Row>
              <Col md={6}>
                <button onClick={fetchApi}>
                  {" "}
                  Re-fetch (sockets may need more then 1 reload)
                </button>
              </Col>
            </>
          ) : (
            <></>
          )}{" "}
        </Container>
        <Particle />
      </Container>
    </div>
  );
};
export default Analytics;
