import { useState, useEffect } from 'react';
import './App.css';
import { supabase } from './supabaseClient';

interface Quote {
  quote: string;
  name: string;
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('hero').select('name, quote');
      if (error) {
        throw error;
      }
      if (data) {
        setQuotes(data);
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRandomQuote = () => {
    if (quotes.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <>
      <h1 className="title">Dota 2 heroes quotes generator</h1>
      <div className="App">
        <img src="/Aegis_logo.png" alt="Corner icon" className="corner-icon top-left" />
        <img src="/Aegis_logo.png" alt="Corner icon" className="corner-icon top-right" />
        <img src="/Aegis_logo.png" alt="Corner icon" className="corner-icon bottom-left" />
        <img src="/Aegis_logo.png" alt="Corner icon" className="corner-icon bottom-right" />
        <div className="quote-container">
          {loading ? (
            <p className="quote">Loading quotes...</p>
          ) : quotes.length === 0 ? (
            null
          ) : (
            quote && (
              <>
                <p className="hero-name">{quote.name}</p>
                <p className="quote">"{quote.quote}"</p>
              </>
            )
          )}
        </div>
        <div className="button-container">
          <img src="/Dota_logo.png" alt="Dota 2 logo" className="dota-logo" />
          <button onClick={getRandomQuote} disabled={loading || quotes.length === 0}>
            Generate
          </button>
          <img src="/Dota_logo.png" alt="Dota 2 logo" className="dota-logo" />
        </div>
      </div>
    </>
  );
}

export default App;
