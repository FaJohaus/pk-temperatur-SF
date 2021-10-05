import { useState } from "react";

function Temperatur() {
    const [eingabe, setEingabe] = useState("");
    const [ergebnis, setErgebnis] = useState("");
    const [Color, setColor] = useState("");
    const [bild, setImg] = useState("");

    const handleChange = (event) => {
        setEingabe(event.target.value);
    }

    const handleClick = () => {
        setErgebnis(eingabe * 9/5 + 32);
        if(eingabe < 0){
            setColor("blue");
            setImg("https://img.welt.de/img/kaufberatung/mobile207548979/9361354597-ci16x9-w1200/FROZEN-II-aka-FROZEN-2-poster-in-Spanish.jpg");
        } else if(eingabe <= 20){
            setColor("cyan");
            setImg("https://i.ytimg.com/vi/6Xyfju8H7Ys/maxresdefault.jpg");
        } else if(eingabe <= 28){
            setColor("green");
            setImg("https://www.dailydot.com/wp-content/uploads/364/04/c816f6bf7ea8b526652487e3479943cc.jpg");
        } else{
            setColor("red");
            setImg("https://everythingisviral.com/wp-content/uploads/2021/05/this-is-fine-meme-1024x722.jpg");
        }
    }

    return (<>
        <div class="ui placeholder segment">
        <div class="ui two column very relaxed stackable grid">
            <div class="column">
            <div class="ui form">
                <div class="field">
                <div class="tempr">
            <div class="ui input">
                <input type="text" value={eingabe} onChange={handleChange}/>
            </div>

            <button class="ui primary basic button" onClick={handleClick}>Temperatur in Fahrenheit</button>
                </div>
                </div>
            </div>
            </div>
            <div class="middle aligned column">
            <div class="tempr">
                <div style={{color: Color}}>{ergebnis}</div> 
                <img class="ui medium circular image" src={bild} src={bild}img/>
            </div>
            </div>
        </div>
        <div class="ui vertical divider">

        </div>
        </div>
        
    </>)
}

export default Temperatur;
