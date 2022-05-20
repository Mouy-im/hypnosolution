import React, { useState } from "react";
 
const Lang = () => {
    const [lang, setLang] = useState();
 
    let changeLanguage = (event) => {
        console.log(event.target.value);
        setLang(event.target.value);
        localStorage.setItem("language", event.target.value);
    }
 
    return (
        <div>
            <div>
                <select value={lang} name="language" onChange={(event) => changeLanguage(event)}>
                    <option value='fr'>FR</option>
                    <option value='en'>EN</option>
                </select>
            </div>
        </div>
    )
}
 
export default Lang;