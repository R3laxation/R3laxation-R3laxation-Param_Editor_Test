import React from 'react';

interface Param {
    id: number;
    name: string;
    type: string;
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            paramValues: props.model.paramValues,
        };
    }

    handleParamChange = (paramId: number, value: string) => {
        const {paramValues} = this.state;
        const updatedValues = paramValues.map((paramValue) => {
            if (paramValue.paramId === paramId) {
                return {
                    ...paramValue,
                    value,
                };
            }
            return paramValue;
        });
        this.setState({
            paramValues: updatedValues,
        });
    };

    getModel = (): Model => {
        const { paramValues } = this.state;
        alert(JSON.stringify(paramValues, null, 2));
        return {
            paramValues,
        };
    };

    render() {
        const {params} = this.props;
        const {paramValues} = this.state;

        return (
            <div>
                {params.map((param) => (
                    <div key={param.id}>
                        <label htmlFor={`param_${param.id}`}>{param.name} </label>
                        <input
                            type="text"
                            id={`param_${param.id}`}
                            value={paramValues.find((paramValue) => paramValue.paramId === param.id)?.value || ''}
                            onChange={(e) => this.handleParamChange(param.id, e.target.value)}
                        />
                    </div>
                ))}
                <button onClick={this.getModel}>Get Model</button>
            </div>
        );
    }
}

export default ParamEditor;
