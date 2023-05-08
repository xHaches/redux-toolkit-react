import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "./rootState";

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
