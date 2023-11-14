import { schema } from "../configs";
const { states, signals } = schema;
export type TargetName = (typeof states)[number];
export type SignalName = (typeof signals)[number];
export type MapScreens<Route> = Record<TargetName, Route>;
