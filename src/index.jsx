import React, { useState } from 'react';
import './index.css';
import taş from './taş.png';
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
                        Bilgisayar
