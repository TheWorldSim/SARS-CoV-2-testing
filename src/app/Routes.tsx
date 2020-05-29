import { h, ComponentChildren } from "preact"
import { Dashboard } from "./components/dashboard/Dashboard"
import { Intro } from "./components/intro/Intro"
import { Standards } from "./components/standards/Standards"
import { NotFound } from "./NotFound"


export enum Route {
  home = "home",
  dashboard = "dashboard",
  standards = "standards",
  not_found = "not_found",
}

export interface RouteConfig
{
  route: Route,
  path: string,
  handler: (change_route: ChangeRoute) => h.JSX.Element,
}

export type ChangeRoute = (route_config: RouteConfig) => void

// RouterConfig

const not_found: RouteConfig = {
  route: Route.not_found,
  path: "",
  handler: (change_route: ChangeRoute) => { return <NotFound /> },
}

const route_map_by_path: {[index: string]: RouteConfig } = {
  "": {
    route: Route.home,
    path: "",
    handler: (change_route: ChangeRoute) => { return <Intro change_route={change_route} /> },
  },
  "/dashboard": {
    route: Route.dashboard,
    path: "",
    handler: (change_route: ChangeRoute) => { return <Dashboard /> },
  },
  "/standards": {
    route: Route.standards,
    path: "",
    handler: (change_route: ChangeRoute) => { return <Standards /> },
  },
  "/404": not_found,
}
// Set the correct paths
Object.keys(route_map_by_path).forEach(path => route_map_by_path[path].path = path)


// match route or document.location

function match_route (route: Route): RouteConfig
{
  const config = Object.values(route_map_by_path).find(c => c.route === route)
  return config || not_found
}

export function match_route_location (location: Location): RouteConfig
{
  const path = location.pathname.replace(/\/$/, "")
  const config = route_map_by_path[path]
  return config || not_found
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
  const { href, onClick } =  link(props)
  return <a href={href} onClick={onClick}>{props.children}</a>
}


interface PropsLink extends PropsLinkUnstyled
{
  current_route: Route
}
export function Link (props: PropsLink)
{
  const className = props.route === props.current_route ? "route active" : "route"
  const { href, onClick } =  link(props)
  return <a href={href} onClick={onClick} className={className}>{props.children}</a>
}

function link (args: { route: Route, change_route: ChangeRoute })
{
  const route_config = match_route(args.route)
  const onClick = (event: Event) => {
    event.stopPropagation()
    event.preventDefault()
    args.change_route(route_config)
  }
  return { href: route_config.path, onClick }
}
