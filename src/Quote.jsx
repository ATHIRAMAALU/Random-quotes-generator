import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./App.css"

const apiUrl ="http://api.quotable.io/random";

function Quote() {
    const[advice, setAdvice]=useState("Please find your quotes below")
    const[author, setAuthor]=useState("Author name")

    const generateQuotes = async() =>{
        const response = await axios.get(apiUrl)
        // console.log(response.data);
        setAdvice(response.data.content);
        setAuthor(response.data.author)
        

    }
  return (
    <>
    <div className='container'>
    <Card className="text-center">
      <Card.Body>
        <h1 className='textname'>Random Quotes Generator</h1>
        <p className='para  '>{advice}</p>
        <h6 className='authorname'>{author}</h6>
        
        <Button className='btm' variant="primary" onClick={generateQuotes}>Ask me Advice</Button>
      </Card.Body>
    </Card>
        
    </div>
    </>
  )
}

export default Quote