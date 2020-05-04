import { h } from "preact"
import { Route, Link, ChangeRoute } from "../../Routes"


interface Props
{
  change_route: ChangeRoute
  location: Route
}

export function Header (props: Props)
{
  const style = {
    position: "fixed",
    left: 0,
    right: 0,
    padding: 10,
    borderBottom: "thin solid black",
    backgroundColor: "white",
  }

  return <div style={style}>
    <Link route={Route.home} current_route={props.location} change_route={props.change_route}>Home</Link>&nbsp;&nbsp;
    <Link route={Route.dashboard} current_route={props.location} change_route={props.change_route}>Dashboard</Link>
    <h1 style={{ textAlign: "center" }}>Scalable SARS-CoV-2 Testing Strategies</h1>
  </div>
}
