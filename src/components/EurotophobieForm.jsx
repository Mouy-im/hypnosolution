import React, { useEffect, useState } from 'react';
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
            setMessage(t('You have probable ereutophobia.'));
        } else if (res > 12) {
           setMessage(t('You have a relatively intense ereutophobia.'));
        } else {
            setMessage(t('You don\'t have eurotophobia.'));
        }
    },[res]);
        
    return (
        <div className="eurotophobieForm">
            <form id="eurotophobieForm">
                <h3>{t('La Salpêtrière Ereutophobia Questionnaire')}</h3>
                <p>{t('Check the box that corresponds to the answer that best suits your describe how you have felt over the past week.')} 
                </p>
                <p className="question">1. {t('How often did you feel the beginnings of blushing?')}</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never1" name="question1" value="0" onClick={(e) => setResponse1(e.target.value)} required />
                        <label htmlFor="never1">{t('Never in the last week')}</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely1" name="question1" value="1" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="rarely1">{t('Rarely (less than once a day)')}</label>
                    </div>
                    <div>
                        <input type="radio" id="little1" name="question1" value="2" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="little1">{t('About once a day')}</label>
                    </div>
                    <div>
                        <input type="radio" id="many1" name="question1" value="3" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="many1">{t('Several times a day')}</label>
                    </div>
                    <div>
                        <input type="radio" id="often1" name="question1" value="4" onClick={(e) => setResponse1(e.target.value)} />
                        <label htmlFor="often1">{t('More than 10 times a day')}</label>
                    </div>
                </div>
                <p className="question">2. {t('How often have you had long, painful bouts of blushing?')}</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never2" name="question2" value="0" onClick={(e) => setResponse2(e.target.value)} required />
                        <label htmlFor="never2">{t('Never in the last week')}</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely2" name="question2" value="1" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="rarely2">{t('Rarely (less than once a day)')}</label>
                    </div>
                    <div>
                        <input type="radio" id="little2" name="question2" value="2" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="little2">{t('About once a day')}</label>
                    </div>
                    <div>
                        <input type="radio" id="many2" name="question2" value="3" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="many2">{t('Several times a day')}</label>
                    </div>
                    <div>
                        <input type="radio" id="often2" name="question2" value="4" onClick={(e) => setResponse2(e.target.value)} />
                        <label htmlFor="often2">{t('More than 10 times a day')}</label>
                    </div>
                </div>
                <p className="question">3. {t('How often have you been upset or anxious about blushing?')}</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never3" name="question3" value="0" onClick={(e) => setResponse3(e.target.value)} required />
                        <label htmlFor="never3">{t('Never in the last week')}</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely3" name="question3" value="1" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="rarely3">{t('Rarely (less than once a day)')}</label>
                    </div>
                    <div>
                        <input type="radio" id="little3" name="question3" value="2" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="little3">{t('About once a day')}</label>
                    </div>
                    <div>
                        <input type="radio" id="many3" name="question3" value="3" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="many3">{t('Several times a day')}</label>
                    </div>
                    <div>
                        <input type="radio" id="often3" name="question3" value="4" onClick={(e) => setResponse3(e.target.value)} />
                        <label htmlFor="often3">{t('More than 10 times a day')}</label>
                    </div>
                </div>
                <p className="question">4. {t('What is, overall, the intensity of the bouts of blushing that you have presented?')}</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never4" name="question4" value="0" onClick={(e) => setResponse4(e.target.value)} required="required" />
                        <label htmlFor="never4">{t('Very mild (or no seizures)')}</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely4" name="question4" value="1" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="rarely4">{t('Lightweight')}</label>
                    </div>
                    <div>
                        <input type="radio" id="little4" name="question4" value="2" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="little4">{t('Moyennement intense')}</label>
                    </div>
                    <div>
                        <input type="radio" id="many4" name="question4" value="3" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="many4">{t('Intense')}</label>
                    </div>
                    <div>
                        <input type="radio" id="often4" name="question4" value="4" onClick={(e) => setResponse4(e.target.value)} />
                        <label htmlFor="often4">{t('Extrêmement intense')}</label>
                    </div>
                </div>
                <p className="question">5. {t('How helpless or overwhelmed do you currently feel about your blushing problem?')}</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never5" name="question5" value="0" onClick={(e) => setResponse5(e.target.value)} required />
                        <label htmlFor="never5">{t('Not overwhelmed or helpless, or no problem at all')}</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely5" name="question5" value="1" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="rarely5">{t('Légèrement dépassé(e) ou impuissant(e)')}</label>
                    </div>
                    <div>
                        <input type="radio" id="little5" name="question5" value="2" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="little5">{t('Moderately overwhelmed or helpless')}</label>
                    </div>
                    <div>
                        <input type="radio" id="many5" name="question5" value="3" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="many5">{t('Greatly overwhelmed or helpless')}</label>
                    </div>
                    <div>
                        <input type="radio" id="often5" name="question5" value="4" onClick={(e) => setResponse5(e.target.value)} />
                        <label htmlFor="often5">{t('Extremely or completely overwhelmed or helpless')}</label>
                    </div>
                </div>
                <p className="question">6. {t('What is, at the moment, the level of the overall impact of your blushing problem in your daily life (work or possibility of working, social life, family life, etc.)?')}</p>
                <div className='response'>
                    <div>
                        <input type="radio" id="never6" name="question6" value="0" onClick={(e) => setResponse6(e.target.value)} required />
                        <label htmlFor="never6">{t('No noise or no problem at all')}</label>
                    </div>
                    <div>
                        <input type="radio" id="rarely6" name="question6" value="1" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="rarely6">{t('Retentissement léger')}</label>
                    </div>
                    <div>
                        <input type="radio" id="little6" name="question6" value="2" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="little6">{t('Retentissement moyen')}</label>
                    </div>
                    <div>
                        <input type="radio" id="many6" name="question6" value="3" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="many6">{t('Significant impact')}</label>
                    </div>
                    <div>
                        <input type="radio" id="often6" name="question6" value="4" onClick={(e) => setResponse6(e.target.value)} />
                        <label htmlFor="often6">{t('Retentissement extrême')}</label>
                    </div>
                </div>
                <div className='submit'>
                {(res != null && message != '') ? (
                   <button type="submit"className='reset button' onClick={(e) => reset(e)}><Scrollchor to="#eurotophobieForm">{t('Reset')}</Scrollchor></button>
                 ) : ( 
                    <button type="submit" className="result button" onClick={(e) => calcEurotophobie(e)}><Scrollchor to="#result">{t('Result')}</Scrollchor></button>
                 )}
                </div>
                <div id="result" className={"result " + ((res != null && message != '') ? 'show' : 'hide')}>
                    <h4>{t('Result')}</h4>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    );
};

export default EurotophobieForm;