import "../App.css"
import { useEffect, useState } from 'react';
import Board from '../components/Memotest/Board/Board';
import "../components/tic-tac-toe/ScoreBoard/ScoreBoard.css"
const emojiList = [...'💣🧤🎩🌮🎱🌶🍕🦖'];

const Memotest = () => {
    const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
    const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [pares,setPares] = useState(0);
    
    let msg;

    useEffect(() => {
        const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
        setShuffledMemoBlocks(shuffledEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false })));
    }, []);

    const shuffleArray = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const handleMemoClick = memoBlock => {
        const flippedMemoBlock = { ...memoBlock, flipped: true };
        let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        if (selectedMemoBlock === null) {
            setselectedMemoBlock(memoBlock);
        } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
            setselectedMemoBlock(null);
            console.log("COMPLETADO")
            setPares(pares + 1);
        } else {
            setAnimating(true);
            setTimeout(() => {
                shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
                shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
                setShuffledMemoBlocks(shuffledMemoBlocksCopy);
                setselectedMemoBlock(null);
                setAnimating(false);
            }, 1000);
        }
    }
    
    if (pares == 8) {
        msg = "Reiniciando partida..."
        setTimeout(() => {
            setPares(0);
            window.location.reload()
        },5000)
    }

    return (
        <div>
            <Board memoBlocks={shuffledMemoBlocks} animating={animating} handleMemoClick={handleMemoClick} />
            <div className="scoreboard1">
                <div>Pares completados: {pares}</div>
            </div>
            <div className="colorB">{msg}</div>
        </div>
    );
}

export default Memotest;