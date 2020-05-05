import { h, ComponentChildren } from "preact"
import { Dashboard } from "./components/dashboard/Dashboard"
import { Intro } from "./components/intro/Intro"
import { Standards } from "./components/standards/Standards"


export enum Route
{
  home = "home",
  dashboard = "dashboard",
  standards = "standards",
}


// RouterConfig

export type ChangeRoute = (route: Route) => void

interface RouteConfig
{
  route: Route,
  hash: string,
  handler: (change_route: ChangeRoute) => h.JSX.Element,
}

const home_config: RouteConfig = {
  route: Route.home,
  hash: "",
  handler: (change_route: ChangeRoute) => { return <Intro change_route={change_route} /> },
}

const route_map: RouteConfig[] = [
  home_config,
  {
    route: Route.dashboard,
    hash: "#dashboard",
    handler: (change_route: ChangeRoute) => { return <Dashboard /> },
  },
  {
    route: Route.standards,
    hash: "#standards",
    handler: (change_route: ChangeRoute) => { return <Standards /> },
  },
]
function match_route (route: Route): RouteConfig
{
  const config = route_map.find(c => c.route === route)
  return config || home_config
}
export function match_route_hash (hash: string): RouteConfig
{
  const config = route_map.find(c => c.hash === hash)
  return config || home_config
}


// Router

export function router (route: Route, change_route: ChangeRoute)
{
  const route_config = match_route(route)
  return route_config.handler(change_route)
}


// Internal Links

interface PropsLinkUnstyled
{
  route: Route
  change_route: ChangeRoute
  children: ComponentChildren
}
export function LinkUnstyled (props: PropsLinkUnstyled)
{
  return link(props)
}


interface PropsLink extends PropsLinkUnstyled
{
  current_route: Route
}
export function Link (props: PropsLink)
{
  return link(props)
}

function link (args: { route: Route, change_route: ChangeRoute, children: ComponentChildren, current_route?: Route })
{
  const href = match_route(args.route).hash
  const onClick = () => args.change_route(args.route)
  const className = args.current_route === undefined ? "" : (args.route === args.current_route ? "route active" : "route")

  return <a href={href} onClick={onClick} className={className}>{args.children}</a>
}
