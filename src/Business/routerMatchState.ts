import { flow, getState, router } from "../app";
import { TargetName } from "../types";

// Матчим роутер с состояием на стейташине
flow.subscribe("send", (actor, value, error) => {
  const state = getState() as TargetName;
  // обработаем ошибку - если переход не удачный
  if (error instanceof Error) console.log(error);
  // при переходах по состоянию машины говорим роутеру куда идти
  router.push({ name: state });
});
