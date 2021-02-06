web({
    lang: 'es',
    api: 'https://dappcall.com/',
    apiVersion: '4',
    smart_contract_address: 'TCPFHFk9VHjTVVdzK4qFTTUmAyv9VwbJmr',
    api_contract_address: 'TXLJjo63J6iVFJJyxSoPVZf3FxGhfHSTTz',
    rate: 25,
    build_cost: [
        3000, 11750, 44500, 155000, 470000, 950000
    ],
    build_per_hour: [
        6, 24, 93, 330, 1020, 2100
    ],
    buildings: [
        'Panadería',
        'Tienda de té',
        'Confitería',
        'Jardín abejas',
        'Cervecería',
        'Perfumería'
    ],
    build_buy_name: [
        'Comprar panadería',
        'Comprar fábrica de té',
        'Comprar pastelería',
        'Comprar jardín abejas',
        'Comprar la cervecería',
        'Comprar la perfumería'
    ],
    build_buy_desc: [
        'Repostería de pan fresco, tartas y galletas. Entrada baja y la producción muy necesaria para tu aldea.',
        'El té es la bebida más popular del mundo. ¿Te gusta el té? ¡A todos les gusta el té! Los habitantes de tu aldea no son la excepción. No se pasa ni una noche en la aldea sin la fiesta de té',
        'Producción de dulces, chocolates, mermeladas y otras golosinas. Los dulces son muy solicitados, porque en tu aldea hay un montón de golosos.',
        'La miel es un producto natural muy saludable. Vendiendo miel, fortaleces la salud de los habitantes. Por lo tanto, cuida su longevidad.',
        'La producción de cerveza artesanal es un negocio rentable. Los habitantes de tu pueblo pueden elegir cerveza oscura o clara.',
        'Producción de alto nivel con los mayores ingresos. Los perfumes, cosméticos y productos de perfumería de élite son artículos de lujo para los prósperos habitantes de tu aldea'
    ],
    buy_desc: {
        deposit: 'Estos fondos se pueden gastar en la compra de nuevos edificios para la expansión de la producción y el aumento de las ganancias',
        withdraw: "Puede retirar estos fondos en cualquier momento, también puedes invertirlos en el desarrollo de tu aldea, eso si no tienes fondos suficientes en la tesorería."
    },
    buy_name: {
        deposit: 'Comprar monedas',
        withdraw: 'Retirar'
    },
    balance_type: {
        build: 'El balance general:',
        deposit: 'En tu cuenta:',
        withdraw: 'Disponible para retiro:'
    },
    count_type: {
        build: 'Edificios:',
        deposit: 'TRON:',
        withdraw: 'Monedas:'
    },
    button_text: {
        build: 'Comprar para',
        deposit: 'Recargar',
        withdraw: 'Retirar'
    },
    not_enough: {
        build: 'Falta de saldo de monedas',
        deposit: 'Falta de saldo TRX en la billetera.',
        withdraw: 'Falta de saldo de monedas disponibles'
    },
    build_card: {
        built: 'Built:',
        profit: {
            hour: 'Ganancia por hora:',
            day: 'Beneficio por día:',
            month: 'Beneficio por mes:',
            monthShort: '/mes'
        },
        price: 'Price:',
        button: 'Comprar',
        pc: '<img src="../images/house-icon.png" style="width: 24px; height: 24px; vertical-align: middle; margin: -4px -2px 0 -4px">'
    },
    confirm: {
        text:  'Confirma la transacción creada en tu billetera Tron',
        successText: "Transacción enviada",
        failText: "No se puede crear la transacción. Intenta volver a cargar la página.",
        cancelText: "Se produjo un error al enviar la transacción. Asegúrese de estar conectado a un nódulo estable y que tenga suficiente energía o TRX para pagar la tarifa de la transacción.",
        rejectText: "Transacción rechazada por usted",
        button: 'DE ACUERDO'
    }
});