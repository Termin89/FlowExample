import { createActor, createMachine, createSchema } from "hstate";
import { createSubscribleFn } from "../../utils/createSubscribleFn";
import { schema } from "../../configs";

const { reference, base, street } = schema;

export function createFlow() {
  const schemaFlow = createSchema({
    reference,
    setting: {
      init: "street",
      mods: {
        base,
        street,
      },
    },
  });

  if (schemaFlow instanceof Error) throw schemaFlow;

  const mashineDC = createMachine(schemaFlow);
  if (mashineDC instanceof Error) throw mashineDC;

  const actorDC = createActor(mashineDC);
  if (actorDC instanceof Error) throw actorDC;

  const flow = createSubscribleFn(actorDC);
  const schema = createSubscribleFn(schemaFlow);

  return {
    flow,
    schema,
  };
}
