import { Environment } from "../../Environment";

export default function useApp() {

    const headerStyle = 
    {
        backgroundColor: Environment.BASE_COLOR,
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: 10000,
        width: '100%',
    };

    const logoStyle = 
    {
        marginTop: '50px',
        padding: '15px',
        backgroundColor: Environment.BASE_COLOR,
        width: '200px',
        zIndex: 1,
        borderRadius: '40%',
    };

    const menuStyle = 
    {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        fontSize: '24px',
        border: 'none',
    };
    const menuContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // fontSize: '28px',
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