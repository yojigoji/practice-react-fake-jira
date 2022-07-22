import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { cleanObject } from "utils";

/**
 * 返回页面url中，指定键的参数值
 */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const [statekeys] = useState(keys);

  return [
    useMemo(
      () =>
        statekeys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || "" };
        }, {} as { [key in K]: string }),
      [searchParams, statekeys]
    ),
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = cleanObject({
        ...Object.entries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParam(o);
    },
  ] as const;
};
