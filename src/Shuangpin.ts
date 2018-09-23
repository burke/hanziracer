import { isUndefined } from "util";

class Shuangpin {
    public static shuang2pin(pair: string) {
        if (pair.length !== 2) {
            throw new Error("pair must have length 2");
        }
        const pinyinInitial = initials[pair[0]];
        const pinyinFinals  = finals[pair[1]];
        return pinyinFinals.map(
            (pinyinFinal: string) => (pinyinInitial + pinyinFinal).toLowerCase()
        ).join("/");
    }

    public static shuang2pinWithToneOrEmpty(code: string) {
        try {
            return this.shuang2pinWithTone(code);
        }
        catch(e) {
            return "";
        }
    }

    public static shuang2pinWithTone(code: string) {
        if (code.length !== 3) {
            throw new Error("code must have length 3");
        }
        const pinyinInitial = initials[code[0]];
        const pinyinFinals  = finals[code[1]];
        const tone = parseInt(code[2], 10);
        if (tone < 1 || tone > 5) {
            throw new Error("tone must be in 1,2,3,4,5");
        }
        return pinyinFinals.map(
            (pinyinFinal: string) => {
                let tonalized = "";
                for (const ch of pinyinFinal) {
                    const tonemap = tones[ch]; // e.g. ["ā", "á", "ǎ", "à", "a"]
                    if (isUndefined(tonemap)) {
                        tonalized += ch; // e.g. "g"
                    } else {
                        tonalized += tonemap[tone - 1]; // e.g. "ā"
                    }
                }
                return pinyinInitial + tonalized;
            }
        ).join("/");
    }
}

const initials = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    i: "ch",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "n",
    o: "",
    p: "p",
    q: "q",
    r: "r",
    s: "s",
    t: "t",
    u: "sh",
    v: "zh",
    w: "w",
    x: "x",
    y: "y",
    z: "z",    
}

const tones = {
    "A": ["ā", "á", "ǎ", "à", "a"],
    "E": ["ē", "é", "ě", "è", "e"],
    "I": ["ī", "í", "ǐ", "ì", "i"],
    "O": ["ō", "ó", "ǒ", "ò", "o"],
    "U": ["ū", "ú", "ǔ", "ù", "u"],
    "Ü": ["ǖ", "ǘ", "ǚ", "ǜ", "ü"],
}

const finals = {
    ";": ["Ing"],
    a: ["A"],
    b: ["Ou"],
    c: ["iAo"],
    d: ["iAng", "uAng"],
    e: ["E"],
    f: ["En"],
    g: ["Eng"],
    h: ["Ang"],
    i: ["I"],
    j: ["An"],
    k: ["Ao"],
    l: ["Ai"],
    m: ["iAn"],
    n: ["In"],
    o: ["O", "uO"],
    p: ["Un"],
    q: ["iU"],
    r: ["uAn", "Er"],
    s: ["Ong", "iOng"],
    t: ["Üe", "Ue"],
    u: ["U"],
    v: ["uI"],
    w: ["iA", "uA"],
    x: ["iE"],
    y: ["uAi", "Ü"],
    z: ["Ei"],
}

export default Shuangpin;