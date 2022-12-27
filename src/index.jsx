import React, { useState } from 'react';

function App() {
    // State değişkenleri:
    // Kullanıcının seçimi, rakipin seçimi ve sonuç mesajı
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [resultMessage, setResultMessage] = useState('');

    // Seçenekleri tutan bir dizi
    const choices = ['rock', 'paper', 'scissors'];

    // Kullanıcının seçimini alan fonksiyon
    const handleUserChoice = (choice) => {
        setUserChoice(choice);

        // Rakipin seçimini rastgele oluştur
        const randomIndex = Math.floor(Math.random() * 3);
        setComputerChoice(choices[randomIndex]);

        // Kazananı veya berabere olup olmadığını hesaplayarak sonuç mesajı oluştur
        if (choice === choices[randomIndex]) {
            setResultMessage('Draw!');
        } else if (
            (choice === 'rock' && choices[randomIndex] === 'scissors') ||
            (choice === 'paper' && choices[randomIndex] === 'rock') ||
            (choice === 'scissors' && choices[randomIndex] === 'paper')
        ) {
            setResultMessage('You win!');
        } else {
            setResultMessage('You lose!');
        }
    };

    return (
        <div>
            {/* Seçenekleri gösteren component */}
            <Options onClick={handleUserChoice} />
            {/* Sonuç mesajını gösteren component */}
            <Result userChoice={userChoice} computerChoice={computerChoice} message={resultMessage} />
        </div>
    );
}

// Seçenekleri gösteren component
function Options(props) {
    return (
        <div>
            {/* Her seçenek için bir Option componenti */}
            <Option value="rock" onClick={props.onClick} />
            <Option value="paper" onClick={props.onClick} />
            <Option value="scissors" onClick={props.onClick} />
        </div>
    );
}

// Bir seçenek gösteren component
function Option(props) {
    return (
        <button onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    );
}

// Sonuç mesajını gösteren component
function Result(props) {
    return (
        <div>
            <p>You chose: {props.userChoice}</p>
            <p>Computer chose: {props.computerChoice}</p>
            <p>{props.message}</p>
        </div>
    );
}
