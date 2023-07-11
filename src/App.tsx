import React from 'react';
import ParamEditor from './Components/ParamEditor';

interface ParamDefinition {
    id: number;
    name: string;
    type: string;
}

const params: ParamDefinition[] = [
    {
        id: 1,
        name: 'Назначение',
        type: 'string',
    },
    {
        id: 2,
        name: 'Длина',
        type: 'string',
    },
];

const model = {
    paramValues: [
        {
            paramId: 1,
            value: 'повседневное',
        },
        {
            paramId: 2,
            value: 'макси',
        },
    ],
};

const App = () => {
    return (
        <div>
            <h1>Редактор параметров</h1>
            <ParamEditor params={params} model={model} />
        </div>
    );
};

export default App;
