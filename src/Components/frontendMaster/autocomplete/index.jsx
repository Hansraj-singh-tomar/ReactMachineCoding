import { useState, useRef, useEffect } from 'react';

import './style.css'

import useNetwork from './useNetwork';

import Header from "./components/header";
import Content from './components/content';
import Suggestions from './components/suggestions';

import { getFilteredSuggestion } from './util';

const MAX_WAIT_TIME = 5;

function Autocomplete() {
    const [language, setLanguage] = useState('')
    const [userLang, setUserLang] = useState([]);
    const [timer, setTimer] = useState(MAX_WAIT_TIME);
    const [enableTyping, setEnableTyping] = useState(true);

    const timerRef = useRef("");

    const { isError = false, isLoading = false, data = [] } = useNetwork() || {};

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(timerRef.current);
            setEnableTyping(true);
            setTimer(MAX_WAIT_TIME);
        }
    }, [timer])

    function handleLanguageChange(e) {
        const value = e?.target?.value;
        setLanguage(value);
    }

    function handleKeyPress(e) {
        const value = e?.target?.value;
        if (e.key === 'Enter') {
            const oldLang = [...userLang];
            oldLang.push({ id: value, value });
            setUserLang(oldLang)
        }
    }

    function handleSuggestionSelect({ id, value }) {
        const oldLang = [...userLang];
        oldLang.push({ id, value });
        setUserLang(oldLang);
        setLanguage("");
        setEnableTyping(false);
        timerRef.current = setInterval(() => {
            setTimer((preVal) => preVal - 1);
        }, 1000);
    }

    const filteredSuggestion = getFilteredSuggestion({ data, language })

    if (isError) {
        return <div>
            <h1>Something went wrong...</h1>
            <button>Refresh</button>
        </div>
    }

    if (isLoading) {
        return <h1>Data is loading...</h1>
    }

    if (!data.length) {
        return <h1>No Data</h1>
    }

    return (
        <div className="autocomplete">
            <Header
                language={language}
                onLanguageChange={handleLanguageChange}
                onKeypress={handleKeyPress}
                time={timer}
                enableTyping={!enableTyping}
            />
            {!!filteredSuggestion.length && <Suggestions suggestions={filteredSuggestion} onSuggestionSelect={handleSuggestionSelect} />}
            {/* {!!language.length && <Content languages={userLang}/>} */}
            <Content languages={userLang} />
        </div>
        // to get boolean value we are using !!
    )
}

export default Autocomplete;


// coupling and cohesion
