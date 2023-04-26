import axios from 'axios';
import { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.ninjas.com/quote')
      .then((response) => {
        setQuote(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>Quote of the day:</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Quote;
