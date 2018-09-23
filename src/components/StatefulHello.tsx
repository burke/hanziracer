import * as React from "react";
import Shuangpin from '../Shuangpin'

export interface IProps {
    name?: string,
}

interface IState {
    data: string;
}

class Hello extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { data: "" };
    }

    public render() {
        return (
            <div className="hello">
                <input 
                    onChange={this.handleChange} 
                    value={this.state.data}
                 />
                <p>{Shuangpin.shuang2pinWithToneOrEmpty(this.state.data)}</p>
            </div>            
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({data: event.target.value});
    }
}

export default Hello;