import { useState } from "react";

const containerCardapio = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    height: '100vh',
    padding: '8%',
}

const buttonStyle = {
    backgroundColor: '#174E23',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    padding: '20px',
    borderRadius: '90px',
    marginTop: '10%',
    cursor: 'pointer',
}

export const Cardapio = () => {
    const [tradicional, setTradicional] = useState(true);


    return (
        <div style={containerCardapio}>

            <h1 style={{ fontSize: '48px', color: "white" }}>Cardápio</h1>

            <div style={{ width: '100vh', display: 'flex', justifyContent: 'left', gap: '20px' }}>
                <button type="submit" style={buttonStyle} onClick={() => setTradicional(true)}>Tradicional</button>
                <button type="submit" style={buttonStyle} onClick={() => setTradicional(false)}>Especial</button>
            </div>

            {tradicional ? (
                <div>
                    <div>
                        {/* <h3>Tamanhos</h3> */}
                        <table>
                            <thead>
                                <tr>
                                    <th>Tamanho</th>
                                    <th>Sabores</th>
                                    <th>Fatias</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pequena</td>
                                    <td>2 Sabores</td>
                                    <td>4 Fatias</td>
                                    <td>R$ 28,00</td>
                                </tr>
                                <tr>
                                    <td>Média</td>
                                    <td>2 Sabores</td>
                                    <td>6 Fatias</td>
                                    <td>R$ 37,00</td>
                                </tr>
                                <tr>
                                    <td>Grande</td>
                                    <td>2 Sabores</td>
                                    <td>6 Fatias</td>
                                    <td>R$ 37,00</td>
                                </tr>
                                <tr>
                                    <td>Família</td>
                                    <td>2 Sabores</td>
                                    <td>6 Fatias</td>
                                    <td>R$ 37,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div style={{padding: "0px"}}>
                            <h2>Sabores</h2>
                            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px"}}>
                                <div>
                                    <h4>Portuguesa</h4>
                                    <p>Mussarela, Presunto, ovos, pimentão, cebola, tomate e orégano.</p>
                                </div>
                                <div>
                                    <h4>Portuguesa</h4>
                                    <p>Mussarela, Presunto, ovos, pimentão, cebola, tomate e orégano.</p>
                                </div>
                                <div>
                                    <h4>Portuguesa</h4>
                                    <p>Mussarela, Presunto, ovos, pimentão, cebola, tomate e orégano.</p>
                                </div>
                                <div>
                                    <h4>Portuguesa</h4>
                                    <p>Mussarela, Presunto, ovos, pimentão, cebola, tomate e orégano.</p>
                                </div>
                                <div>
                                    <h4>Portuguesa</h4>
                                    <p>Mussarela, Presunto, ovos, pimentão, cebola, tomate e orégano.</p>
                                </div>
                                <div>
                                    <h4>Portuguesa</h4>
                                    <p>Mussarela, Presunto, ovos, pimentão, cebola, tomate e orégano.</p>
                                </div>
                                <div>
                                    <h4>Portuguesa</h4>
                                    <p>Mussarela, Presunto, ovos, pimentão, cebola, tomate e orégano.</p>
                                </div>
                              
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        <h3>Valores Especiais</h3>
                    </div>
                    <div>
                        <h4>Sabores Especiais</h4>
                    </div>
                </div>
            )}
        </div>
    );
}