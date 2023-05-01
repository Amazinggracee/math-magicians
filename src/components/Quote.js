import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const quoteStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          'https://api.api-ninjas.com/v1/quotes?category=success',
          {
            headers: {
              'X-Api-Key': 'MLitwyLPktsfrqe6cSpdzQ==MYn3WHZYciWuim32',
            },
          },
        );
        setQuote(response.data[0].quote);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchQuote();
  }, []);

  if (loading) {
    return <p style={quoteStyle}>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error}
      </p>
    );
  }

  return <p>{quote}</p>;
};

export default Quote;
