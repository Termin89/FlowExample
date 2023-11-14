import { flow, getState, router, appUI } from "../app";
import { MOUNT_ID_TAG } from "../configs";
import { TargetName } from "../types";

// Подпишимся на старт мтейтМашины
flow.subscribe("start", (actor, initState, error) => {
  // обработаем ошибку - если старт неудачен
  if (error instanceof Error) console.log(error);
  const state = getState() as TargetName;
  // На старте заранее пропишим что экран ставиться на состояние
  router.replace({ name: state });
  // Монтируем вьюху приложения
  appUI.mount(MOUNT_ID_TAG);
});

// Запускаем стейтМашину
flow.start();
