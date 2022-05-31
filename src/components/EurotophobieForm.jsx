import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Scrollchor}  from 'react-scrollchor';

const EurotophobieForm = ({t}) => {
    
    const [response1, setResponse1] = useState(null);
    const [response2, setResponse2] = useState(null);
    const [response3, setResponse3] = useState(null);
    const [response4, setResponse4] = useState(null);
    const [response5, setResponse5] = useState(null);
    const [response6, setResponse6] = useState(null);
    const [res, setRes] = useState(null);
    const [message, setMessage] = useState('');

    const calcEurotophobie = (e) => {
        e.preventDefault();
        setRes(eval((Number(response1)+Number(response2)+Number(response3)+Number(response4)+Number(response5)+Number(response6))));
    }  
    const reset = (e) => {
        e.preventDefault();
        setRes(null);
        setMessage('');
        document.querySelectorAll('input[type=radio]').forEach( el => el.checked = false );
    } 
    
    useEffect(() => {
        if(res > 6 && res < 12) {
            setMessage('une éreutophobie probable.');
        } else if (res > 12) {
           setMessage('une éreutophobie relativement intense.');
        } else {
            setMessage('pas d\'eurotophobie.');
        }
    },[res]);
        
    

    return (
        <div className="eurotophobieForm">
            <form id="eurotophobieForm">
                <h3>Questionnaire d’Ereutophobie de la Salpêtrière</h3>
                <p>Cochez la case qui correspond à la réponse qui convient le mieux pour
                décrire ce que vous avez ressenti au cours de la dernière semaine.  
                </p>
                <p className="question">1. A quelle fréquence avez-vous ressenti des débuts de rougissement ?</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never1" name="question1" value="0" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="never1">Jamais au cours de la dernière semaine</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely1" name="question1" value="1" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="rarely1">Rarement (moins d'une fois par jour)</label>
                    </div>
                    <div>
                        <input type="radio" id="little1" name="question1" value="2" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="little1">Environ une fois par jour</label>
                    </div>
                    <div>
                        <input type="radio" id="many1" name="question1" value="3" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="many1">Plusieurs fois par jour</label>
                    </div>
                    <div>
                        <input type="radio" id="often1" name="question1" value="4" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="often1">Plus de 10 fois par jour</label>
                    </div>
                </div>
                <p className="question">2. A quelle fréquence avez-vous ressenti des crises de rougissements longues et pénibles ?</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never2" name="question2" value="0" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="never2">Jamais au cours de la dernière semaine</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely2" name="question2" value="1" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="rarely2">Rarement (moins d'une fois par jour)</label>
                    </div>
                    <div>
                        <input type="radio" id="little2" name="question2" value="2" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="little2">Environ une fois par jour</label>
                    </div>
                    <div>
                        <input type="radio" id="many2" name="question2" value="3" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="many2">Plusieurs fois par jour</label>
                    </div>
                    <div>
                        <input type="radio" id="often2" name="question2" value="4" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="often2">Plus de 10 fois par jour</label>
                    </div>
                </div>
                <p className="question">3. A quelle fréquence avez-vous été  perturbé ou anxieux par l'idée de rougir ?</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never3" name="question3" value="0" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="never3">Jamais au cours de la dernière semaine</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely3" name="question3" value="1" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="rarely3">Rarement (moins d'une fois par jour)</label>
                    </div>
                    <div>
                        <input type="radio" id="little3" name="question3" value="2" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="little3">Environ une fois par jour</label>
                    </div>
                    <div>
                        <input type="radio" id="many3" name="question3" value="3" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="many3">Plusieurs fois par jour</label>
                    </div>
                    <div>
                        <input type="radio" id="often3" name="question3" value="4" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="often3">Plus de 10 fois par jour</label>
                    </div>
                </div>
                <p className="question">4. Quelle est, globalement, l'intensité des crises de rougissement que vous avez présentées ?</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never4" name="question4" value="0" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="never4">Très légère (ou aucune crise)</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely4" name="question4" value="1" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="rarely4">Légère</label>
                    </div>
                    <div>
                        <input type="radio" id="little4" name="question4" value="2" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="little4">Moyennement intense</label>
                    </div>
                    <div>
                        <input type="radio" id="many4" name="question4" value="3" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="many4">Intense</label>
                    </div>
                    <div>
                        <input type="radio" id="often4" name="question4" value="4" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="often4">Extrêmement intense</label>
                    </div>
                </div>
                <p className="question">5. A quel point vous sentez-vous actuellement impuissant(e) ou dépassé(e) par votre problème de rougissement ?</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never5" name="question5" value="0" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="never5">Pas dépassé(e) ni impuissant(e), ou pas de problème du tout</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely5" name="question5" value="1" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="rarely5">Légèrement dépassé(e) ou impuissant(e)</label>
                    </div>
                    <div>
                        <input type="radio" id="little5" name="question5" value="2" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="little5">Moyennement dépassé(e) ou impuissant(e)</label>
                    </div>
                    <div>
                        <input type="radio" id="many5" name="question5" value="3" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="many5">Grandement dépassé(e) ou impuissant(e)</label>
                    </div>
                    <div>
                        <input type="radio" id="often5" name="question5" value="4" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="often5">Extrêmement ou complètement dépassé(e) ou impuissant(e)</label>
                    </div>
                </div>
                <p className="question">6. Quel est, en ce moment, le niveau du retentissement global de votre problème de rougissement dans votre vie quotidienne (travail ou possibilité de travailler, vie sociale, vie familiale, etc.) ?</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never6" name="question6" value="0" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="never6">Aucun retentissement ou pas de problème du tout</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely6" name="question6" value="1" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="rarely6">Retentissement léger</label>
                    </div>
                    <div>
                        <input type="radio" id="little6" name="question6" value="2" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="little6">Retentissement moyen</label>
                    </div>
                    <div>
                        <input type="radio" id="many6" name="question6" value="3" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="many6">Retentissement important</label>
                    </div>
                    <div>
                        <input type="radio" id="often6" name="question6" value="4" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="often6">Retentissement extrême</label>
                    </div>
                </div>
                <div className='submit'>
                {(res != null && message != '') ? (
                   <button type="submit"className='reset' onClick={(e) => reset(e)}><Scrollchor to="#eurotophobieForm">Reset</Scrollchor></button>
                 ) : ( 
                    <button type="submit" className="result" onClick={(e) => calcEurotophobie(e)}><Scrollchor to="#result">Résultat</Scrollchor></button>
                 )}
                </div>
                <div id="result" className={"result " + ((res != null && message != '') ? 'show' : 'hide')}>
                    <h4>Résultat</h4>
                    <p>{message}</p>
                </div>
              
                
                
            </form>
        </div>
    );
};

export default EurotophobieForm;