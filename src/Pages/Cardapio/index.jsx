import { useState } from "react";
import styles from './Cardapio.module.css';
import { SaboresCardapio } from "./SaboresCardapio.jsx";
import { TableCardapio } from "./TableCardapio.jsx";


document.title = "Cardápio - Pizzaria do Careca";

export const Cardapio = () => {
    const [tradicional, setTradicional] = useState(true);

    const pizzasTradicionaisProps = [
        {
            tamanho: 'Pequena',
            qtdeSabores: '2 sabores',
            qtdeFatias: '4 fatias',
            preco: 'R$ 30,00'
        },
        {
            tamanho: 'Media',
            qtdeSabores: '2 sabores',
            qtdeFatias: '6 fatias',
            preco: 'R$ 43,00'
        },
        {
            tamanho: 'Grande',
            qtdeSabores: '3 sabores',
            qtdeFatias: '8 fatias',
            preco: 'R$ 52,00'
        },
        {
            tamanho: 'Família',
            qtdeSabores: '4 sabores',
            qtdeFatias: '12 fatias',
            preco: 'R$ 70,00'
        },
    ]

    const pizzasEspeciaisProps = [
        {
            tamanho: 'Pequena',
            qtdeSabores: '2 sabores',
            qtdeFatias: '4 fatias',
            preco: 'R$ 30,00'
        },
        {
            tamanho: 'Media',
            qtdeSabores: '2 sabores',
            qtdeFatias: '6 fatias',
            preco: 'R$ 51,00'
        },
        {
            tamanho: 'Grande',
            qtdeSabores: '3 sabores',
            qtdeFatias: '8 fatias',
            preco: 'R$ 64,00'
        },
        {
            tamanho: 'Família',
            qtdeSabores: '4 sabores',
            qtdeFatias: '12 fatias',
            preco: 'R$ 85,00'
        },
    ]

    const saboresTradicionais = [
        {
            sabor: "Calabresa 1",
            ingredientes: "Mussarela, calabresa, azeitona e orégano"
        },
        {
            sabor: "Calabresa 2",
            ingredientes: "Mussarela, calabresa, cebola, tomate, azeitona e orégano"
        },
        {
            sabor: "Calabresa catupiry",
            ingredientes: "Mussarela, calabresa, catupiry, azeitona e orégano"
        },
        {
            sabor: "Calabresa cheddar",
            ingredientes: "Mussarela, calabresa, cheddar, azeitona e orégano"
        },
        {
            sabor: "Mussarela",
            ingredientes: "Mussarela, tomate, azeitona e orégano"
        },
        {
            sabor: "Portuguesa",
            ingredientes: "Mussarela, presunto, ovo mexidos, tomate, cebola, pimentão, azeitona e orégano"
        },
        {
            sabor: "Frango",
            ingredientes: "Mussarela, frango, azeitona e orégano"
        },
        {
            sabor: "Frango catupiry",
            ingredientes: "Mussarela, frango, catupiry, azeitona e orégano"
        },
        {
            sabor: "Frango cheddar",
            ingredientes: "Mussarela, frango, cheddar, azeitona e orégano"
        },
        {
            sabor: "Milho",
            ingredientes: "Mussarela, milho, azeitona e orégano"
        },
        {
            sabor: "Baiana",
            ingredientes: "Mussarela, calabresa triturada, cebola, pimenta calabresa, pimenta biquinho, azeitona e orégano"
        },
        {
            sabor: "2 Queijos",
            ingredientes: "Mussarela, parmesão, azeitona e orégano"
        },
        {
            sabor: "3 Queijos",
            ingredientes: "Mussarela, parmesão, catupiry, azeitona e orégano"
        },
        {
            sabor: "4 Queijos",
            ingredientes: "Mussarela, parmesão, catupiry, cheddar, azeitona e orégano"
        },
        {
            sabor: "A Moda da Casa 1",
            ingredientes: "Mussarela, presunto, calabresa, cebola, azeitona, catupiry, cheddar e orégano"
        },
        {
            sabor: "A Moda da Casa 2",
            ingredientes: "Mussarela, presunto triturado, cebola, milho, ervilha, cheddar, azeitona e orégano"
        },
        {
            sabor: "Margherita",
            ingredientes: "Mussarela, tomate, manjericão, azeitona e orégano"
        },
        {
            sabor: "Presunto",
            ingredientes: "Mussarela, presunto, cebola, azeitona e orégano"
        }
    ]

    const saboresEspeciais = [
        {
            sabor: "Bacon",
            ingredientes: "Mussarela, bacon, azeitona e orégano"
        },
        {
            sabor: "Charque",
            ingredientes: "Mussarela, charque, cebola, azeitona e orégano"
        },
        {
            sabor: "Charque catupiry",
            ingredientes: "Mussarela, charque, catupiry, azeitona e orégano"
        },
        {
            sabor: "Camarão 1",
            ingredientes: "Mussarela, camarão, azeitona e orégano"
        },
        {
            sabor: "Camarão 2",
            ingredientes: "Mussarela, camarão, catupiry, azeitona e orégano"
        },
        {
            sabor: "Camarão 3",
            ingredientes: "Mussarela, camarão, cheddar, azeitona e orégano"
        },
        {
            sabor: "Carne do Sol 1",
            ingredientes: "Mussarela, carne do sol, cebola, azeitona e orégano"
        },
        {
            sabor: "Carne do Sol 2",
            ingredientes: "Mussarela, carne do sol, catupiry, azeitona e orégano"
        },
        {
            sabor: "Salaminho",
            ingredientes: "Mussarela, salaminho, cebola, azeitona e orégano"
        },
        {
            sabor: "Pepperoni",
            ingredientes: "Mussarela, pepperoni, azeitona e orégano"
        },
        {
            sabor: "Peppercheddar",
            ingredientes: "Mussarela, pepperoni, cheddar, azeitona e orégano"
        },
        {
            sabor: "Catupperoni",
            ingredientes: "Mussarela, pepperoni, catupiry, azeitona e orégano"
        },
        {
            sabor: "Atum",
            ingredientes: "Mussarela, atum, cebola, azeitona e orégano"
        },
        {
            sabor: "Atum catupiry",
            ingredientes: "Mussarela, atum, catupiry, azeitona e orégano"
        },
        {
            sabor: "Lombinho",
            ingredientes: "Mussarela, lombinho, cebola, azeitona e orégano"
        },
        {
            sabor: "Lombinho catupiry",
            ingredientes: "Mussarela, lombinho, catupiry, azeitona e orégano"
        }
    ]


    return (
        <div className={styles.container}>

            <h1 style={{ fontSize: '48px', color: "white", fontWeight: "100" }}>Cardápio</h1>

            <div className={styles.btnContainer} >
                <button title="Tradicionais" className={tradicional ? styles.botaoAtivo : styles.botao} onClick={() => setTradicional(true)}> Tradicional </button>
                <button className={!tradicional ? styles.botaoAtivo : styles.botao} onClick={() => setTradicional(false)}>Especiais</button>
            </div>

            <div>
                <div>
                    <TableCardapio cardapio={tradicional ? pizzasTradicionaisProps : pizzasEspeciaisProps} />
                </div>
                <div>
                    <SaboresCardapio sabores={tradicional ? saboresTradicionais : saboresEspeciais}/>
                </div>
            </div>
        </div>
    );
}