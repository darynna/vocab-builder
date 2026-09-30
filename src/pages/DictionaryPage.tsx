import Dashboard from "../components/Dashboard/Dashboard.tsx";
import WordsTable from "../components/WordsTable/WordsTable.tsx";
import Pagination from "../components/Pagination/Pagination.tsx";
import {useEffect, useState} from "react";
import type {Word} from "../types/word.tsx";
import {requestOwnWords} from "../services/wordService.tsx";

const DictionaryPage = () => {

  const [ownWords, setOwnWords] = useState<Word[]>([]);

  useEffect(() => {
    const fetchWords= async() => {
      try {
        const response = await requestOwnWords();
        setOwnWords(response.results);
      }catch (e){
        console.log(e);
      }
    }
    fetchWords();
  }, []);

  return (
      <>
        <Dashboard />
        <WordsTable  words={ownWords}/>
        <Pagination />
      </>
  );
};

export default DictionaryPage;