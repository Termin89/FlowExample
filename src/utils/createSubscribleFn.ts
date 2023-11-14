function createEventsMap<
  O extends { [key: string]: unknown },
  K extends keyof O,
  T extends Record<K, Array<(...arg: unknown[]) => void>>
>(obj: O): T {
  return Object.keys(obj).reduce((map, key) => {
    if (typeof obj[key as K] === "function") {
      //@ts-ignore
      map[key as K] = [];
    }
    return map;
  }, {} as T);
}

export function createSubscribleFn<T extends Record<string, unknown>>(obj: T) {
  const eventsMap = createEventsMap(obj);

  const subscribe = <K extends keyof typeof eventsMap>(
    subscribeName: K,
    callback: (obj: T, ...args: unknown[]) => void
  ) => {
    eventsMap[subscribeName].push((...args: unknown[]) =>
      callback(obj, ...args)
    );
  };

  //   const unsubscribe = <K extends keyof typeof eventsMap>(
  //     subscribeName: K,
  //     callback: Function
  //   ) => {
  //     const index = eventsMap[subscribeName].findIndex((fn) => {
  //        console.log(fn, callback)
  //        return fn === callback
  //     });
  //     console.log(index);
  //     if (index !== -1) {
  //       eventsMap[subscribeName].splice(index, 1);
  //     }
  //   };

  const proxy = new Proxy(obj, {
    get(target, prop) {
      const value = target[prop as string];
      if (typeof value === "function") {
        // callbacks - вызываеться после вызова функции
        return function (...args: any[]) {
          const result = value.apply(target, args);
          const callbacks = eventsMap[prop as keyof typeof eventsMap];
          callbacks.forEach((callback) => callback(...args, result));
          return result;
        };
      }
      return value;
    },
  });
  const getEvents = () => {};
  return { ...proxy, subscribe, eventsMap };
}
