import {authService} from "./authService.tsx";
import type {WordsResponse} from "../types/word.tsx";

export const requestOwnWords = async (): Promise<WordsResponse> => {
    const  {data} = await authService.get("words/own");
    return data;
};