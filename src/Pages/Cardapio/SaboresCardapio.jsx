import styles from './Cardapio.module.css';

export const SaboresCardapio = ({sabores}) => {
    return (
        <div>
            <h2 className={styles.tituloSabores}>Sabores</h2>
            <div className={styles.containerSabores}>
                {sabores.map((item) => {
                    return (
                        <div>
                            <h4>{item.sabor}</h4>
                            <p>{item.ingredientes}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};