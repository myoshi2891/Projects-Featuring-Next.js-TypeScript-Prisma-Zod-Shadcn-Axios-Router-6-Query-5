import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDisPatch } from "./store";

export const useAppDispatch: () => AppDisPatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
