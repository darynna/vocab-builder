import {authService} from "./authService.tsx";
import type {CreateNewWordRequest, Word, WordsResponse} from "../types/word.tsx";

export const requestOwnWords = async (): Promise<WordsResponse> => {
    const  {data} = await authService.get("words/own");
    return data;
};

export const createWord = async (word: CreateNewWordRequest): Promise<Word> => {
    const  {data} = await authService.post("words/create", word);
    return data;
};

export const requestCategories = async (): Promise<string[]> => {
    const  {data} = await authService.get("words/categories");
    return data;
};