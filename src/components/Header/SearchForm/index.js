import React from 'react';
import './index.css';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoList } from '../../../store/video/videoSlice';


const SearchForm = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(); //input 안에 있는 것들을 참조
    const onSearch = (input)=>{
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q${input}&regionCode=kr&type=video&key= AIzaSyBqxcm2PG_7yLTSgRAGITOOq5n8S9FyUVA`
        dispatch(getVideoList(url))
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        const input = inputRef.current.value; //current는 inputRef를 참조하고 있음
        input && onSearch(input); //input 값이 있을 때만 오른쪽 값이 return됨
        inputRef.current.value = ''; //검색창에 입력값이 없으면 빈 값
    }

    return (
     <form className='search' onSubmit={onSubmit}>
        <input
            placeholder='검색'
            type="text"
            className='searchInput'
            ref={inputRef} //참조하고 있는 값
        />
        <button className='searchBtn'>
            <img src="/images/search.png" alt="search icon" className='searchIcon' />
        </button>
    </form>
    );
};

export default SearchForm;