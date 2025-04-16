import styles from './Cardapio.module.css';

export const TableCardapio = ({cardapio}) => {

    console.log(cardapio)
    return(
        <table className={styles.tabela} >
            <thead>
                <tr style={{ padding: "10px" }}>
                    <th>Tamanho</th>
                    <th>Sabores</th>
                    <th>Fatias</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {cardapio.map(item => (
                    <tr>
                        <td>{item.tamanho}</td>
                        <td>{item.qtdeSabores}</td>
                        <td>{item.qtdeFatias}</td>
                        <td>{item.preco}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}