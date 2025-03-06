import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./App.css";

const apiUrl = "https://dummyjson.com/quotes";

function Quote() {
    const [advice, setAdvice] = useState("Please find your quotes below");
    const [author, setAuthor] = useState("Author name");

    const generateQuotes = async () => {
        const response = await axios.get(apiUrl);
        const quotesArray = response.data.quotes; // Get array of quotes

        if (quotesArray.length > 0) {
            const randomQuote = quotesArray[Math.random() * quotesArray.length | 0]; 
            setAdvice(randomQuote.quote);
            setAuthor(randomQuote.author);
        }
    };

    return (
        <div className='container'>
            <Card className="text-center">
                <Card.Body>
                    <h1 className='textname'>Random Quotes Generator</h1>
                    <p className='para'>{advice}</p>
                    <h6 className='authorname'>— {author}</h6>
                    <Button className='btm' variant="primary" onClick={generateQuotes}>
                        Ask me Advice
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Quote;
