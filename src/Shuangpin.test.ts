import Shuangpin from './Shuangpin';

it('generates pinyin from shuangpin correctly', () => {
    const cases = [
        ["aa", "aa"], ["bb", "bou"], ["cc", "ciao"], ["dd", "diang/duang"],
        ["ee", "ee"], ["ff", "fen"], ["gg", "geng"], ["hh", "hang"],
        ["ii", "chi"], ["jj", "jan"], ["kk", "kao"], ["ll", "lai"],
        ["mm", "mian"], ["nn", "nin"], ["oo", "o/uo"], ["pp", "pun"],
        ["qq", "qiu"], ["rr", "ruan/rer"], ["ss", "song/siong"], ["tt", "tüe/tue"],
        ["uu", "shu"], ["vv", "zhui"], ["ww", "wia/wua"], ["xx", "xie"],
        ["yy", "yuai/yü"], ["zz", "zei"], ["q;", "qing"]
    ];
    for (const c of cases) {
        expect(Shuangpin.shuang2pin(c[0])).toEqual(c[1]);
    }
});

it('generates pinyin from shuangpin with tones', () => {
    const cases = [
        ["aa2", "aá"], ["bb1", "bōu"], ["cc3", "ciǎo"], ["dd4", "diàng/duàng"],
        ["yy5", "yuai/yü"], ["yy3", "yuǎi/yǚ"]
    ];
    for (const c of cases) {
        expect(Shuangpin.shuang2pinWithTone(c[0])).toEqual(c[1]);
    }
});
it('throws when the input string is too short', () => {
    expect(() => {
        Shuangpin.shuang2pin('v')
    }).toThrow();
})

it('throws when the input string is too long', () => {
    expect(() => {
        Shuangpin.shuang2pin('vbv')
    }).toThrow();
})