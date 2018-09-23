import * as React from "react";
import Hanzi from '../Hanzi'
import Shuangpin from '../Shuangpin'

export interface IProps {
    name?: string,
}

interface IState {
    data: string;
    hanzi: string;
    pinyin: string;
}

class Hello extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const hanzi = this.randomProperty(Hanzi);
        const pinyin = Hanzi[hanzi];
        const data = "";
        this.state = { data, hanzi, pinyin };
    }

    public render() {
        return (
            <div className="hello">
                <input 
                    onChange={this.handleChange} 
                    value={this.state.data}
                 />
                <p>{Shuangpin.shuang2pinWithToneOrEmpty(this.state.data)}</p>
                <p>{this.state.hanzi}</p>
            </div>            
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pyspec = Shuangpin.shuang2pinWithToneOrEmpty(event.target.value);
        const pys = pyspec.split("/");
        for (const py of pys) {
            if (py === this.state.pinyin) {
                const hanzi = this.randomProperty(Hanzi);
                const pinyin = Hanzi[hanzi];
                this.setState({hanzi, pinyin});
            }
            this.setState({data: event.target.value});
        }
    }

    private randomProperty = (obj: object) => {
        const keys = Object.keys(obj);
        const fidx = keys.length * Math.random();
        const idx = Math.round(fidx);
        return keys[idx];
    }
}

export default Hello;