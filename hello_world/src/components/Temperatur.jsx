import { useState } from "react";

function Temperatur() {
    const [eingabe, setEingabe] = useState("");
    const [ergebnis, setErgebnis] = useState("");
    const [bgCol, setBgColor] = useState("");
    const [bild, setImg] = useState("");

    const handleChange = (event) => {
        setEingabe(event.target.value);
    }

    const handleClick = () => {
        setErgebnis(eingabe * 9/5 + 32);
        if(eingabe < 0){
            setBgColor("blue");
            setImg("https://img.welt.de/img/kaufberatung/mobile207548979/9361354597-ci16x9-w1200/FROZEN-II-aka-FROZEN-2-poster-in-Spanish.jpg");
        } else if(eingabe <= 20){
            setBgColor("cyan");
            setImg("https://i.ytimg.com/vi/6Xyfju8H7Ys/maxresdefault.jpg");
        } else if(eingabe <= 28){
            setBgColor("green");
            setImg("https://www.dailydot.com/wp-content/uploads/364/04/c816f6bf7ea8b526652487e3479943cc.jpg");
        } else{
            setBgColor("red");
            setImg("https://everythingisviral.com/wp-content/uploads/2021/05/this-is-fine-meme-1024x722.jpg");
        }
    }

    return (<>
        <input value={eingabe} onChange={handleChange}/>

        <button onClick={handleClick}>Temperatur in Fahrenheit</button>
    
        <div style={{backgroundColor: bgCol}}>{ergebnis}</div> 
        <img src={bild} width="300px"/>
    </>)
}

export default Temperatur;
