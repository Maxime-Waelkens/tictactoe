import React from 'react';
import { useState, useEffect } from 'react';
import './styles/App.css';

const App = () => {

  const [cells, setCells] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner(checkWinner());
    if (winner) {
      window.alert(`Le joueur ${winner} a gagné !`);
    }
  }, [cells]);


  function onClickSquare(event) {
    const cellId = event.target.id;
    const cellIndex = parseInt(cellId) - 1; 

    if (cells[cellIndex] == null && winner == null) {
      const newCells = [...cells];

      if (player === 1) {
        newCells[cellIndex] = 'X';
        setCells(newCells);
        setPlayer(2);
      }
      else {
        newCells[cellIndex] = 'O';
        setCells(newCells);
        setPlayer(1);
      }
    }
    else { }
  }

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
      [0, 4, 8], [2, 4, 6] // Diagonales
    ];
  
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (cells[a] === 'X' || cells[a] === 'O') {
        if (cells[a] === cells[b] && cells[a] === cells[c]) {
          return cells[a];
        }
      }
    }
  
    return null; // Pas de gagnant
  }

  return (
    <div className="page">
      <table className="tab">
        <tbody>
          <tr>
            <td id="1" onClick={onClickSquare}>{cells[0]}</td>
            <td id="2" onClick={onClickSquare}>{cells[1]}</td>
            <td id="3" onClick={onClickSquare}>{cells[2]}</td>
          </tr>
          <tr>
            <td id="4" onClick={onClickSquare}>{cells[3]}</td>
            <td id="5" onClick={onClickSquare}>{cells[4]}</td>
            <td id="6" onClick={onClickSquare}>{cells[5]}</td>
          </tr>
          <tr>
            <td id="7" onClick={onClickSquare}>{cells[6]}</td>
            <td id="8" onClick={onClickSquare}>{cells[7]}</td>
            <td id="9" onClick={onClickSquare}>{cells[8]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
