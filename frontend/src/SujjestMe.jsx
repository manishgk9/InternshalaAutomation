import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const data = [
  'ASP.NET Development',
  'Android App Development',
  'Angular.js Development',
  'Artificial Intelligence (AI)',
  'Backend Development',
  'Big Data',
  'Blockchain Development',
  'Cloud Computing',
  'Computer Science',
  'Computer Vision',
  'Cyber Security',
  'Data Science',
  'Database Building',
  'Embedded Systems',
  'Flutter Development',
  'Front End Development',
  'Full Stack Development',
  'Game Development',
  'Image Processing',
  'Internet of Things (IoT)',
  'Java Development',
  'Javascript Development',
  'Machine Learning',
  'Mobile App Development',
  'Node.js Development',
  'PHP Development',
  'Programming',
  'Python/Django Development',
  'Robotics',
  'Ruby on Rails',
  'Software Development',
  'Software Testing',
  'Web Development',
  'Wordpress Development',
  'iOS App Development'
]

const AutocompleteComponent = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : data.filter(lang =>
      lang.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const getSuggestionValue = suggestion => suggestion.replace(/-/g, ' ');

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.replace(/-/g, ' ')}
    </div>
  );

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Type a career field',
    value,
    onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default AutocompleteComponent;
