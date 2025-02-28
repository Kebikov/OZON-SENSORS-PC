interface Isubtitle {
    text: string;
}

type TSensor = 'Дымовой извещатель' | 'Ручной извещатель' | 'Сработка спринклера';

export interface IItemSensors {
    type: TSensor;
    title: string;
    subtitle: Isubtitle[];
    img: number;
}

export interface ISensors {
    [key: string]: IItemSensors 
}

export type TKeySensor = keyof ISensors;

export const SENSORS_A: ISensors = {
    1: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК-2 (1-этаж)',
        subtitle: [
            {
                text: 'зарядная'
            }, 
            {
                text: 'комната оформления документов'
            },
            {
                text: 'вестибюль'
            }
        ],
        img: require('../source/imgPlanA/1.jpg')
    },
    2: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК-2 (1-этаж)',
        subtitle: [
            {
                text: 'электрощитовая, вход с улицы'
            }
        ],
        img: require('../source/imgPlanA/2.jpg')
    },
    3: {
        type: 'Ручной извещатель',
        title: 'Блок "А", АБК-2 (1-этаж)',
        subtitle: [
            {
                text: 'электрощитовая, вход с улицы'
            }, 
        ],
        img: require('../source/imgPlanA/3.jpg')
    },
    4: {
        type: 'Ручной извещатель',
        title: 'Блок "А", АБК-2 (1-этаж)',
        subtitle: [
            {
                text: 'вестибюль'
            }, 
            {
                text: 'помещение АТП(нососная, вход с улицы)'
            }
        ],
        img: require('../source/imgPlanA/4.jpg')
    },
    5: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК-2 (2-этаж)',
        subtitle: [
            {
                text: 'кладовая'
            },
            {
                text: 'вестибюль (вход в кладовую и ИТП)'
            },
        ],
        img: require('../source/imgPlanA/5.jpg')
    },
    6: {
        type: 'Ручной извещатель',
        title: 'Блок "А", АБК-2 (2-этаж)',
        subtitle: [
            {
                text: 'вестибюль (вход в кладовую и ИТП)'
            }
        ],
        img: require('../source/imgPlanA/6.jpg')
    },
    7: {
        type: 'Ручной извещатель',
        title: 'Блок "А", склад',
        subtitle: [
            {
                text: 'балкон над варотами №40-54'
            }
        ],
        img: require('../source/imgPlanA/7.jpg')
    },
    8: {
        type: 'Ручной извещатель',
        title: 'Блок "А", склад',
        subtitle: [
            {
                text: 'линия ИПР между воротами №40-№54, зарядной, вход в АБК-2 со стороны склада и стелажами'
            }
        ],
        img: require('../source/imgPlanA/8.jpg')
    },
    9: {
        type: 'Ручной извещатель',
        title: 'Блок "А", склад',
        subtitle: [
            {
                text: 'центральная часть стеллажей перпендикулярно входу "F" , выход "F"'
            }
        ],
        img: require('../source/imgPlanA/9.jpg')
    },
    10: {
        type: 'Ручной извещатель',
        title: 'Блок "А", склад',
        subtitle: [
            {
                text: 'линия ИПР между воротами №1-№15, вход в АБК-1 со стороны склада и стелажами'
            }
        ],
        img: require('../source/imgPlanA/10.jpg')
    },
    11: {
        type: 'Ручной извещатель',
        title: 'Блок "А", склад',
        subtitle: [
            {
                text: 'центральная часть стеллажей перпендикулярно входу "E" , выход "E"'
            }
        ],
        img: require('../source/imgPlanA/11.jpg')
    },
    12: {
        type: 'Ручной извещатель',
        title: 'Блок "А", АБК-1 (1-этаж)',
        subtitle: [
            {
                text: 'вестибюль №1, №2'
            },
            {
                text: 'у выхода на леснт.клетки №1, №2'
            },
        ],
        img: require('../source/imgPlanA/12.jpg')
    },
    13: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК-1 (1-этаж)',
        subtitle: [
            {
                text: 'вистибюль №1'
            }
        ],
        img: require('../source/imgPlanA/13.jpg')
    },
    14: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК-1 (1-этаж)',
        subtitle: [
            {
                text: 'вистибюль №1, №2'
            },
            {
                text: 'комната оформления документов'
            },
            {
                text: 'помещения сетевого администратора'
            },
        ],
        img: require('../source/imgPlanA/14.jpg')
    },
    15: {
        type: 'Ручной извещатель',
        title: 'Блок "А", АБК-1 (2-этаж)',
        subtitle: [
            {
                text: 'мужск.гардероб'
            },
            {
                text: 'женск.гардероб'
            }
        ],
        img: require('../source/imgPlanA/15.jpg')
    },
    16: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК-1 (2-этаж)',
        subtitle: [
            {
                text: 'вистибюль перед мужской гардеробной'
            },
            {
                text: 'гардеробная мужская'
            }
        ],
        img: require('../source/imgPlanA/16.jpg')
    },
    17: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК-1 (2-этаж)',
        subtitle: [
            {
                text: 'вистибюль перед гардеробной женской'
            },
            {
                text: 'гардеробная женская'
            },
            {
                text: 'серверная'
            },
        ],
        img: require('../source/imgPlanA/17.jpg')
    },
    18: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК 2 (2-этаж)',
        subtitle: [
            {
                text: 'все кабинеты 2-го этажа'
            }
        ],
        img: require('../source/imgPlan/18.jpg')
    },
    19: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК 1 (3-этаж)',
        subtitle: [
            {
                text: 'коридор у выхода на лестн.клетку №1'
            },
            {
                text: 'столовая'
            }
        ],
        img: require('../source/imgPlan/19.jpg')
    },
    20: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК 1 (3-этаж)',
        subtitle: [
            {
                text: 'коридор у каб. 303-307'
            },
            {
                text: 'каб. №303, 306, 307'
            }
        ],
        img: require('../source/imgPlan/20.jpg')
    },
    21: {
        type: 'Ручной извещатель',
        title: 'Блок "А", АБК 1 (3-этаж)',
        subtitle: [
            {
                text: 'у выхода на лестн.клетку №1'
            },
            {
                text: 'у выхода на лестн.клетку №2'
            },
            {
                text: 'балкон над воротами № 16-26'
            }
        ],
        img: require('../source/imgPlan/21.jpg')
    },
    22: {
        type: 'Ручной извещатель',
        title: 'Блок "А", АБК 2 (балкон)',
        subtitle: [
            {
                text: 'балкон над воротами №39-28'
            }
        ],
        img: require('../source/imgPlan/22.jpg')
    },
    23: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК 1 (4-этаж)',
        subtitle: [
            {
                text: 'каб. №401'
            },
            {
                text: 'каб. №408'
            },
            {
                text: 'коридор'
            }
        ],
        img: require('../source/imgPlan/23.jpg')
    },
    24: {
        type: 'Ручной извещатель',
        title: 'Блок "А", АБК 1 (4-этаж)',
        subtitle: [
            {
                text: 'коридор'
            }
        ],
        img: require('../source/imgPlan/24.jpg')
    },
    25: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", АБК 1 (4-этаж)',
        subtitle: [
            {
                text: 'каб. №405'
            },
            {
                text: 'каб. №406'
            },
            {
                text: 'каб. №407'
            },
        ],
        img: require('../source/imgPlan/25.jpg')
    },
    26: {
        type: 'Дымовой извещатель',
        title: 'Блок "А", Cклад  (1-этаж)',
        subtitle: [
            {
                text: 'электрощитовая'
            }
        ],
        img: require('../source/imgPlan/26.jpg')
    },
}

export const SENSORS_B: ISensors = {
    1: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК-1 (1-этаж)',
        subtitle: [
            {
                text: 'вестибюль (пост охраны №1)'
            }, 
            {
                text: 'комната охраны'
            }
        ],
        img: require('../source/imgPlan/1.jpg')
    },
    2: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК-1 (склад 1-этаж)',
        subtitle: [
            {
                text: 'каб.106, каб.107А'
            }, 
            {
                text: 'тех.помещение №112 у поста №3'
            }, 
            {
                text: 'вестибюль (лестн. клетка №2)'
            }, 
            {
                text: 'лестн. клетка №2'
            }
        ],
        img: require('../source/imgPlan/2.jpg')
    },
    3: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", АБК-1 (1-этаж)',
        subtitle: [
            {
                text: 'вестибюль (пост №1)'
            }, 
            {
                text: 'лестн. клетка №1'
            }, 
            {
                text: 'вестибюль (лестн. клетка №2)'
            }, 
            {
                text: 'лестн. клетка №2'
            }
        ],
        img: require('../source/imgPlan/3.jpg')
    },
    4: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Cклад  (1-этаж)',
        subtitle: [
            {
                text: 'пост №3 (у выхода)'
            }, 
            {
                text: 'склад со стороны ворот №16 - 26'
            }
        ],
        img: require('../source/imgPlan/4.jpg')
    },
    5: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Cклад  (1-этаж)',
        subtitle: [
            {
                text: 'стеллаж мезонина 5,6 от ворот № 16-26 (перпендикулярно выходу «D», выход «D»)'
            }
        ],
        img: require('../source/imgPlan/5.jpg')
    },
    6: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", Cклад (1-этаж)',
        subtitle: [
            {
                text: 'тех.помещение №120 (у ворот №21)'
            },
            {
                text: 'тех.помещение №137 (у ворот №21)'
            }
        ],
        img: require('../source/imgPlan/6.jpg')
    },
    7: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 2 (1-этаж)',
        subtitle: [
            {
                text: 'вестибюль'
            },
            {
                text: 'диспетчерская (документооборот)'
            }
        ],
        img: require('../source/imgPlan/7.jpg')
    },
    8: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 2 (1-этаж)',
        subtitle: [
            {
                text: 'электрощитовая (вход справа от входа в вестибюль АБК 2)'
            }
        ],
        img: require('../source/imgPlan/8.jpg')
    },
    9: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", АБК 2 (1-этаж)',
        subtitle: [
            {
                text: 'вестибюль'
            }
        ],
        img: require('../source/imgPlan/9.jpg')
    },
    10: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", АБК 2 (1-этаж)',
        subtitle: [
            {
                text: 'электрощитовая (вход справа от входа в вестибюль АБК 2)'
            },
            {
                text: 'насосная станция пожаротушения'
            }
        ],
        img: require('../source/imgPlan/10.jpg')
    },
    11: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Cклад  (1-этаж)',
        subtitle: [
            {
                text: 'центральная часть мезонина перпендикулярно выходу «С»'
            }
        ],
        img: require('../source/imgPlan/11.jpg')
    },
    12: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Cклад  (1-этаж)',
        subtitle: [
            {
                text: 'от склада АХО и вдоль ворот № 39-28'
            }
        ],
        img: require('../source/imgPlan/12.jpg')
    },
    13: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 1 (2-этаж)',
        subtitle: [
            {
                text: 'мужск.гардероб (2-ой этаж)'
            }
        ],
        img: require('../source/imgPlan/13.jpg')
    },
    14: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 1 (2-этаж)',
        subtitle: [
            {
                text: 'женск. гардероб'
            },
            {
                text: 'серверная (у выхода на лестн. клетку №2)'
            }
        ],
        img: require('../source/imgPlan/14.jpg')
    },
    15: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", АБК 1 (2-этаж)',
        subtitle: [
            {
                text: 'мужск.гардероб (у входа)'
            },
            {
                text: 'женск.гардероб (у входа)'
            }
        ],
        img: require('../source/imgPlan/15.jpg')
    },
    16: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 2 (2-этаж)',
        subtitle: [
            {
                text: 'коридор'
            },
            {
                text: 'гардероб'
            }
        ],
        img: require('../source/imgPlan/16.jpg')
    },
    17: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", АБК 2 (2-этаж)',
        subtitle: [
            {
                text: 'коридор'
            }
        ],
        img: require('../source/imgPlan/17.jpg')
    },
    18: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 2 (2-этаж)',
        subtitle: [
            {
                text: 'все кабинеты 2-го этажа'
            }
        ],
        img: require('../source/imgPlan/18.jpg')
    },
    19: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 1 (3-этаж)',
        subtitle: [
            {
                text: 'коридор у выхода на лестн.клетку №1'
            },
            {
                text: 'столовая'
            }
        ],
        img: require('../source/imgPlan/19.jpg')
    },
    20: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 1 (3-этаж)',
        subtitle: [
            {
                text: 'коридор у каб. 303-307'
            },
            {
                text: 'каб. №303, 306, 307'
            }
        ],
        img: require('../source/imgPlan/20.jpg')
    },
    21: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", АБК 1 (3-этаж)',
        subtitle: [
            {
                text: 'у выхода на лестн.клетку №1'
            },
            {
                text: 'у выхода на лестн.клетку №2'
            },
            {
                text: 'балкон над воротами № 16-26'
            }
        ],
        img: require('../source/imgPlan/21.jpg')
    },
    22: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", АБК 2 (балкон)',
        subtitle: [
            {
                text: 'балкон над воротами №39-28'
            }
        ],
        img: require('../source/imgPlan/22.jpg')
    },
    23: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 1 (4-этаж)',
        subtitle: [
            {
                text: 'каб. №401'
            },
            {
                text: 'каб. №408'
            },
            {
                text: 'коридор'
            }
        ],
        img: require('../source/imgPlan/23.jpg')
    },
    24: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", АБК 1 (4-этаж)',
        subtitle: [
            {
                text: 'коридор'
            }
        ],
        img: require('../source/imgPlan/24.jpg')
    },
    25: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", АБК 1 (4-этаж)',
        subtitle: [
            {
                text: 'каб. №405'
            },
            {
                text: 'каб. №406'
            },
            {
                text: 'каб. №407'
            },
        ],
        img: require('../source/imgPlan/25.jpg')
    },
    26: {
        type: 'Дымовой извещатель',
        title: 'Блок "Б", Cклад  (1-этаж)',
        subtitle: [
            {
                text: 'электрощитовая'
            }
        ],
        img: require('../source/imgPlan/26.jpg')
    },
    29: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Мезонин (2-этаж)',
        subtitle: [
            {
                text: 'вторая половина за конвейером, ближе к подъемникам №5, №6'
            }
        ],
        img: require('../source/imgPlan/29.jpg')
    },
    30: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Мезонин (2-этаж)',
        subtitle: [
            {
                text: 'первая половина до конвейера, ближе к подьемникам Nºl, Nº2 и Nº3, Nº4'
            }
        ],
        img: require('../source/imgPlan/30.jpg')
    },
    31: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Мезонин (3-этаж)',
        subtitle: [
            {
                text: 'вторая половина за конвейером, ближе к подьемникам Nº5, Nºб'
            }
        ],
        img: require('../source/imgPlan/31.jpg')
    },
    32: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Мезонин (3-этаж)',
        subtitle: [
            {
                text: 'первая половина до конвейсра, ближе к подъемникам №l, №2 и №3, №4'
            }
        ],
        img: require('../source/imgPlan/32.jpg')
    },
    33: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Мезонин (4-этаж)',
        subtitle: [
            {
                text: 'вторая половина за конвейером, ближе к подъемникам Nº5, №б'
            }
        ],
        img: require('../source/imgPlan/33.jpg')
    },
    34: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Мезонин (4-этаж)',
        subtitle: [
            {
                text: 'первая половина до конвейера, ближе к подьемникам №1, №2 и №3, №4'
            }
        ],
        img: require('../source/imgPlan/34.jpg')
    },
    35: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Мезонин (5-этаж)',
        subtitle: [
            {
                text: 'вторая половина за конвейером, ближе к подьемникам №5, №б'
            }
        ],
        img: require('../source/imgPlan/35.jpg')
    },
    36: {
        type: 'Ручной извещатель',
        title: 'Блок "Б", Мезонин (5-этаж)',
        subtitle: [
            {
                text: 'первая половина до конвейера, ближе к подьемникам №1, №2 и №3, №4'
            }
        ],
        img: require('../source/imgPlan/36.jpg')
    },
    37: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", потолок',
        subtitle: [
            {
                text: 'направление №11'
            },
            {
                text: 'ближняя часть потолка над постом №3 и рампами №16-№26'
            }
        ],
        img: require('../source/imgPlan/37.jpg')
    },
    38: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", потолок',
        subtitle: [
            {
                text: 'направление №12'
            },
            {
                text: 'потолок над 5-м этажом мезонина'
            }
        ],
        img: require('../source/imgPlan/38.jpg')
    },
    39: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", потолок',
        subtitle: [
            {
                text: 'направление №13'
            },
            {
                text: 'дальняя часть потолка над постом №2 и рампами №39-№27'
            }
        ],
        img: require('../source/imgPlan/39.jpg')
    },
    40: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (1-этаж)',
        subtitle: [
            {
                text: 'направление №14'
            },
            {
                text: 'левая часть 1-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/40.jpg')
    },
    41: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (1-этаж)',
        subtitle: [
            {
                text: 'направление №15'
            },
            {
                text: 'средняя часть 1-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/41.jpg')
    },
    42: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (1-этаж)',
        subtitle: [
            {
                text: 'направление №16'
            },
            {
                text: 'правая часть 1-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/42.jpg')
    },
    43: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (2-этаж)',
        subtitle: [
            {
                text: 'направление №17'
            },
            {
                text: 'левая часть 2-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/43.jpg')
    },
    44: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (2-этаж)',
        subtitle: [
            {
                text: 'направление №18'
            },
            {
                text: 'средняя часть 2-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/44.jpg')
    },
    45: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (2-этаж)',
        subtitle: [
            {
                text: 'направление №19'
            },
            {
                text: 'правая часть 2-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/45.jpg')
    },
    46: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (3-этаж)',
        subtitle: [
            {
                text: 'направление №20'
            },
            {
                text: 'левая часть 3-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/46.jpg')
    },
    47: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (3-этаж)',
        subtitle: [
            {
                text: 'направление №21'
            },
            {
                text: 'средняя часть 3-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/47.jpg')
    },
    48: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (3-этаж)',
        subtitle: [
            {
                text: 'направление №22'
            },
            {
                text: 'правая часть 3-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/48.jpg')
    },
    49: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Антресоль',
        subtitle: [
            {
                text: 'направление №23 (антресоль)'
            },
            {
                text: 'антресоль над рампами №39-№27'
            }
        ],
        img: require('../source/imgPlan/49.jpg')
    },
    50: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (4-этаж)',
        subtitle: [
            {
                text: 'направление №24'
            },
            {
                text: 'левая часть 4-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/50.jpg')
    },
    51: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (4-этаж)',
        subtitle: [
            {
                text: 'направление №25'
            },
            {
                text: 'средняя часть 4-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/51.jpg')
    },
    52: {
        type: 'Сработка спринклера',
        title: 'Блок "Б", Мезонин (4-этаж)',
        subtitle: [
            {
                text: 'направление №26'
            },
            {
                text: 'правая часть 4-го этажа мезонина'
            }
        ],
        img: require('../source/imgPlan/52.jpg')
    }
}



