import Dashboard from "../components/Dashboard/Dashboard.tsx";
import WordsTable from "../components/WordsTable/WordsTable.tsx";
import WordsPagination from "../components/Pagination/WordsPagination.tsx";
import {useEffect, useState} from "react";
import type {Word} from "../types/word.tsx";
import {requestOwnWords, requestCategories} from "../services/wordService.tsx";
import {useWordStore} from "../stores/wordStore.tsx";

const DictionaryPage = () => {

  const [ownWords, setOwnWords] = useState<Word[]>([]);
  const setCategories = useWordStore((state) => state.setCategories);

  useEffect(() => {
    const fetchWords= async() => {
      try {
        const response = await requestOwnWords();
        setOwnWords(response.results);
      }catch (e){
        console.log(e);
      }
    }
    const fetchCategories = async () => {
        try{
            const categories = await requestCategories();
            setCategories(categories);
        }catch (e){
            console.error(e);
        }
    }
    fetchWords();
    fetchCategories();
  }, []);

  return (
      <>
        <Dashboard />
        <WordsTable  words={ownWords}/>
        <WordsPagination />
      </>
  );
};

export default DictionaryPage;