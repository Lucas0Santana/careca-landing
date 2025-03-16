import { Environment } from "../../Environment";

export default function useApp() {

    const headerStyle = 
    {
        backgroundColor: Environment.BASE_COLOR,
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const logoStyle = 
    {
        marginTop: '50px',
        padding: '20px',
        backgroundColor: Environment.BASE_COLOR,
    };

    const menuStyle = 
    {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
    };
    const menuContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    };

    const itemsLeft = [
        { key: 0, label: "Cardápio" },
        { key: 1, label: "Faça seu pedido" }
    ];
    const itemsRight = [
        { key: 2, label: "Localização" },
        { key: 3, label: "Redes Sociais" }
    ];

    return {
        headerStyle,
        logoStyle,
        menuStyle,
        menuContainerStyle,
        itemsLeft,
        itemsRight,
    }
}