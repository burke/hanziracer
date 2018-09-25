import * as React from "react";
import Hanzi from '../Hanzi'
import Shuangpin from '../Shuangpin'

export interface IProps {
    name?: string,
}

interface IState {
    data: string;
    hanzi: string;
    history: string[];
}

class HanziRacer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const hanzi = this.randomProperty(Hanzi);
        const data = "";
        this.state = { data, hanzi, history: [] };
    }
 
    public render() {
        return (
            <div className="hello">
                <div>
                    <input onChange={this.handleChange} value={this.state.data} />
                    <span>{Shuangpin.shuang2pinWithToneOrEmpty(this.state.data)}</span>
                </div>
                <div>
                    {this.state.history.map((a,b) => <span key={a} className={this.toneClass(a)}>{a}</span>)}
                    <span>{this.state.hanzi}</span>
                </div>
            </div>            
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pyspec = Shuangpin.shuang2pinWithToneOrEmpty(event.target.value);
        const pys = pyspec.split("/");
        for (const py of pys) {
            if (py === Hanzi[this.state.hanzi]) {
                const hanzi = this.randomProperty(Hanzi);
                const data = "";
                const history = this.state.history;
                history.push(this.state.hanzi);
                this.setState({hanzi, data, history});
                break;
            } else {
                this.setState({data: event.target.value});
            }
        }
    }
    private toneClass = (hanzi: string) => {
        const py = Hanzi[hanzi];
        const tone = Shuangpin.toneFromPinyin(py);
        return "tone"+tone;
    }

    private randomProperty = (obj: object) => {
        const keys = Object.keys(obj);
        const fidx = keys.length * Math.random();
        const idx = Math.round(fidx);
        return keys[idx];
    }
}

export default HanziRacer;