import { Carousel } from 'antd';
import { Personalized_card } from '../Personalized_card';

import { brigadeiro, camarao, quatroQueijos } from "../../Images/Pizzas";

export const Carrossel = () => {

    const carrosselProps = [
        {
            pizza: 'Camarão',
            ingredientes: 'Mussarela, Camarão, azeitona, orégano e molho de tomate',
            img_pizza: camarao
        },
        {
            pizza: 'Pizza de 4 Queijos',
            ingredientes: 'Mussarela, parmesão, manjericão, tomate, azeitona, orégano e molho de tomate',
            img_pizza: quatroQueijos
        },
        {
            pizza: 'Pizza de Brigadeiro',
            ingredientes: 'Mussarela, Chocolate e Granulado',
            img_pizza: brigadeiro
        }
    ]

    const estiloDots = {
        color: "rgba(0, 252, 63, 0.5)"
    }


    return (
        <Carousel
            style={{
                width: "620px",
                margin: "0 auto",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "green"
            }}
            autoplay={{ dotDuration: true }} 
            autoplaySpeed={8000}
            arrows
            waitForAnimate
            fade
        >
            {(carrosselProps.map((props, index) => (
                <Personalized_card
                    key={`img-pizza-${index}`}
                    pizza={props.pizza}
                    ingredientes={props.ingredientes}
                    img_pizza={props.img_pizza}
                />
            )))}

        </Carousel>
    )
}