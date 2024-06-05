import { useEffect, useState } from 'react';

const ProfessionTyping = () => {
    const [showCursor, setShowCursor] = useState<boolean>(true);
    const [currentPos, setCurrentPos] = useState<number>(0);
    const [deleteProfession, setDeleteProfession] = useState<boolean>(false);
    const [profession, setProfession] = useState<string>("");
    const [currentProfession, setCurrentProfession] = useState<number>(0);

    // Type
    useEffect(() => {
        if (currentPos < profession.length && !deleteProfession) {
            const intervalID = setTimeout(() => {
                setCurrentPos(currentPos + 1);
            }, 150);
            return () => clearInterval(intervalID);
        }
    }, [currentPos, profession, deleteProfession]);

    // Reached end
    useEffect(() => {
        const intervalID = setTimeout(() => {
            if (currentPos === profession.length) {
                setDeleteProfession(true);
            }
        }, 3000);
        return () => clearInterval(intervalID);
    }, [currentPos, profession]);

    // Delete
    useEffect(() => {
        const intervalID = setTimeout(() => {
            if (currentPos > 1 && deleteProfession) {
                setCurrentPos(currentPos - 1);
            }
            if (currentPos <= 1) {
                setDeleteProfession(false);
                switch (currentProfession) {
                    case 0:
                        setProfession("a Graphics Programmer");
                        setCurrentProfession(1);
                        break;
                    case 1:
                        setProfession("a Web Developer");
                        setCurrentProfession(2);
                        break;
                    case 2:
                        setProfession("a Software Engineer");
                        setCurrentProfession(0);
                        break;
                    default:
                        break;
                }
            }
        }, 150);
        return () => clearInterval(intervalID);
    }, [currentPos, currentProfession, deleteProfession, profession]);

    // Cursor
    useEffect(() => {
        const intervalID = setTimeout(() => {
            setShowCursor(!showCursor);
        }, 750);
        return () => clearInterval(intervalID);
    }, [showCursor]);

    return (
        <>
            {profession.slice(0, currentPos)}
            {profession.length !== currentPos ? (
                <span>|</span>
            ) : showCursor ? (
                <span>|</span>
            ) : (
                <span>&nbsp;</span>
            )}
        </>
    );
};

export default ProfessionTyping;