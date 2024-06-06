import { useEffect, useState } from 'react';

const ProfessionTyping = ({ professions }: { professions: string[] }) => {
    const [index, setIndex] = useState<number>(0);
    const [refreash, setRefreash] = useState<boolean>(false);

    useEffect(() => {
        const intervalID = setTimeout(() => {
            setIndex((index + 1) % professions.length);
        }, 3000);
        return () => clearInterval(intervalID);
    }, [index]);

    return (
        <div>
            {professions.map((profession, i) => {
                if (i === index) {
                    return <div key={i} className='slide-up'>{profession}</div>;
                }
            })}
        </div>
    );
};

export default ProfessionTyping;