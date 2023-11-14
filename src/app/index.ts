import { createUI } from "../modules/UI";
import { createFlow } from "../modules/Flow";

const { flow, schema } = createFlow();
const { appUI, router } = createUI();
const api = "";

const getState = () => flow.context.state?.value;
const getPreviosState = () => flow.context.state?.previos?.value;

export { flow, schema, appUI, router, api, getState, getPreviosState };
