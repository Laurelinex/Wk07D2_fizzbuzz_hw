import React, {useState, useEffect} from 'react';

const FizzBuzzGame = () => {
    const [number, setNumber] = useState(1);
    const [output, setOutput] = useState("");

    useEffect(() => {
        if (number % 3 === 0 && number % 5 === 0) {
            setOutput("FizzBuzz")
        } else if (number % 3 === 0) {
            setOutput("Fizz")
        } else if (number % 5 === 0) {
            setOutput("Buzz")
        } else {
            setOutput("")};
        }, [number]);

    const handleInc = () => {
        setNumber(number + 1);
    };

    return (
     <div className="FizzBuzzGame">
       <h1>Fizz Buzz Game</h1>
       <h2>{number}</h2> 
        <button className="button" value={number} onClick={handleInc}> + </button>
        <h2>{output}</h2>
     </div>
  );
}

export default FizzBuzzGame;
  