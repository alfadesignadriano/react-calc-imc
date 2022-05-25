import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import {Level,levels, calculateImc} from './helpers/imc';
import leftArrowImage from './assets/leftarrow.png';
import {GridItem} from './components/GridItem';

const App = () =>{
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null> (null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField,weightField));
    } else {
      alert("Digite todos so campos")
    }

  }

  const handleBackButton = () =>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>Criado no século 19 pelo matemático Lambert Quételet, 
            o Índice de Massa Corporal, conhecido pela sigla IMC, 
            é um cálculo simples que permite medir se alguém está 
            ou não com o peso ideal. Ele aponta se o peso está 
            adequado ou se está abaixo ou acima do peso.</p>
          <input
            type="number"
            placeholder="Sua altura (m)"
            disabled={toShow?true:false}
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}          
            />
          <input
            type="number"
            placeholder="Seu peso (kg)"
            disabled={toShow?true:false}
            value={weightField > 0? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}

            />
          <button 
             disabled={toShow?true:false}
             onClick={handleCalculateButton}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
           {!toShow &&
            <div className={styles.grid}>
              {levels.map((item,key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShow} />
            </div>
          } 
         </div>
      </div>
    </div>
  )
}

export default App
