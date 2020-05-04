import { h, ComponentChildren } from "preact"


export enum Route
{
  home = "home",
  dashboard = "dashboard",
}


export type ChangeRoute = (route: Route) => void

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
  const href = args.route === Route.dashboard ? "#dashboard" : ""
  const onClick = () => args.change_route(args.route)
  const className = args.current_route === undefined ? "" : (args.route === args.current_route ? "route active" : "route")

  return <a href={href} onClick={onClick} className={className}>{args.children}</a>
}
