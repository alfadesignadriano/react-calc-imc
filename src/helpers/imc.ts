export type Level = {
    title : string;
    color : string;
    icon : 'down' | 'up';
    imc : number[];
    yourImc ?: number
}
export const levels: Level[] = [
    {title : 'Magreza', color : '#96a3ab', icon : 'down', imc :[0,18.5999]},
    {title : 'Normal', color : '#0ead69', icon : 'up' , imc :[18.6,24.999]},
    {title : 'Sobrepeso', color : '#e2b039', icon : 'down' , imc :[25,30.999]},
    {title : 'Obesidade', color : '#c3423f', icon : 'down' , imc :[30.1,99]}
];

export const calculateImc = (height : number, weight : number) => {
    const imc = weight / (height * height);
    for (let i in levels) {
        if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1] ) {
            //vou criar uma copia do objeto pq o valor do youimc estava ficanco salvo e ficando no layout qdo limpava a tela
            let levlcopy :Level = {...levels[i]};
            levlcopy.yourImc = imc;
            return levlcopy;
        }
    }
    return null;
}