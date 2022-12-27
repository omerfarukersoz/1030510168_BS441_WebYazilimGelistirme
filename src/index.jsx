import React, { useState } from 'react';
import './index.css';
import taş from './tas.png';
import kağıt from './kağıt.png';
import makas from './makas.png';

function App() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);

    const choices = ['taş', 'kağıt', 'makas'];

    function choose(choice) {
        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[randomIndex];
        setPlayerChoice(choice);
        setComputerChoice(computerChoice);

        if (choice === computerChoice) {
            setResult('draw');
        } else if (
            (choice === 'taş' && computerChoice === 'makas') ||
            (choice === 'kağıt' && computerChoice === 'taş') ||
            (choice === 'makas' && computerChoice === 'kağıt')
        ) {
            setResult('win');
        } else {
            setResult('lose');
        }
    }

    return (
        <div className="game-container">
            <div className="options">
                <div className="option" onClick={() => choose('taş')}>
                    <img src={taş} alt="Taş" />
                    <p>Taş</p>
                </div>
                <div className="option" onClick={() => choose('kağıt')}>
                    <img src={kağıt} alt="Kağıt" />
                    <p>Kağıt</p>
                </div>
                <div className="option" onClick={() => choose('makas')}>
                    <img src={makas} alt="Makas" />
                    <p>Makas</p>
                </div>
            </div>
            {playerChoice && computerChoice && (
                <div className="result">
                    <p>
                        Sen: <strong>{playerChoice}</strong>
                    </p>
                    <p>
                        Bilgisayar: <strong>{computerChoice}</strong>
                    </p>
                    <p className={result ${result}}>
                        {result === 'win' && 'Kazandın!'}
                        {result === 'lose' && 'Kaybettin!'}
                        {result === 'draw' && 'Berabere kaldınız!'}
                    </p>
                </div>
            )}
        </div>
    );


    import React, { useState } from 'react';
    function NormalMode() {
        const [score, setScore] = useState(0);

        function play(choice) {
            // Oyun mekanizması burada yer alır
        }

        return (
            <div>
                {/* Oyun UI burada yer alır */}
                <button onClick={() => play('rock')}>Rock</button>
                <button onClick={() => play('paper')}>Paper</button>
                <button onClick={() => play('scissors')}>Scissors</button>
            </div>
        );
    }



    import React, { useState } from 'react';
    function ProMode() {
        const [score, setScore] = useState(0);

        function play(choice) {
            // Oyun mekanizması burada yer alır
            // choice değişkeni "rock", "paper", "scissors" veya "spock" olabilir
        }

        return (
            <div>
                {/* Oyun UI burada yer alır */}
                <button onClick={() => play('rock')}>Rock</button>
                <button onClick={() => play('paper')}>Paper</button>
                <button onClick={() => play('scissors')}>Scissors</button>
                <button onClick={() => play('spock')}>Spock</button>
            </div>
        );
    }

    export default ProMode;


    export default NormalMode;



}


export default App;
