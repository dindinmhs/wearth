import { forestGreen } from "@/color";

interface Props {
    width? : number;
    height? : number;
    type : 'icon' | 'word';
}

export const Logo = ({ width=50, height=49, type} :  Props) => {
    if (type === 'icon') {
        return (
            <svg width={width} height={height} viewBox="0 0 145 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.407 16C64.607 8.8 72.907 2.33333 76.907 0H30.9071C-18.5929 16 -1.09295 75 30.9071 80H48.4071C75.9071 95 63.407 121 48.4071 126.5H17.9071V93L24.4071 85L8.90705 77L0.907054 93V143.5H51.4071C104.907 116.5 76.9071 68.5 51.4071 62H34.407C3.60704 43.6 21.5737 23.6667 34.407 16H63.407Z" fill={forestGreen}/>
                <path d="M81.411 127.5C80.211 134.7 71.911 141.167 67.911 143.5H113.911C163.411 127.5 145.911 68.5 113.911 63.5H96.411C68.911 48.5 81.411 22.5 96.411 17H126.911V50.5L120.411 58.5L135.911 66.5L143.911 50.5L143.911 0H93.411C39.911 27 67.911 75 93.411 81.5H110.411C141.211 99.9 123.244 119.833 110.411 127.5H81.411Z" fill={forestGreen}/>
            </svg>

        )
    }
    if (type === 'word') {
        return (
            <svg className="w-[150px] h-auto min-w-[150px] min-h-[30px]" viewBox="0 0 724 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M196.328 85.512C198.12 88.7547 200.125 91.5707 202.344 93.96C204.648 96.3493 207.123 98.184 209.768 99.464C212.499 100.744 215.357 101.384 218.344 101.384C221.501 101.384 224.104 100.616 226.152 99.08C228.2 97.4587 229.224 95.2827 229.224 92.552C229.224 90.248 228.627 88.4133 227.432 87.048C226.237 85.5973 224.317 84.232 221.672 82.952C219.027 81.672 215.528 80.2213 211.176 78.6C209.043 77.832 206.568 76.7653 203.752 75.4C201.021 74.0347 198.419 72.2853 195.944 70.152C193.469 67.9333 191.421 65.288 189.8 62.216C188.179 59.0587 187.368 55.2613 187.368 50.824C187.368 45.5333 188.733 40.968 191.464 37.128C194.28 33.288 198.035 30.3867 202.728 28.424C207.507 26.376 212.797 25.352 218.6 25.352C224.573 25.352 229.736 26.3333 234.088 28.296C238.525 30.2587 242.195 32.7333 245.096 35.72C247.997 38.7067 250.216 41.736 251.752 44.808L235.24 54.024C233.96 51.8907 232.467 50.056 230.76 48.52C229.139 46.8987 227.304 45.6613 225.256 44.808C223.293 43.8693 221.16 43.4 218.856 43.4C215.784 43.4 213.437 44.0827 211.816 45.448C210.195 46.728 209.384 48.3493 209.384 50.312C209.384 52.36 210.152 54.152 211.688 55.688C213.309 57.224 215.571 58.632 218.472 59.912C221.459 61.192 225.043 62.5573 229.224 64.008C232.381 65.2027 235.325 66.6107 238.056 68.232C240.787 69.768 243.176 71.6453 245.224 73.864C247.357 76.0827 249.021 78.6427 250.216 81.544C251.411 84.4453 252.008 87.7733 252.008 91.528C252.008 96.0507 251.069 100.104 249.192 103.688C247.4 107.187 244.925 110.131 241.768 112.52C238.696 114.909 235.155 116.701 231.144 117.896C227.219 119.176 223.165 119.816 218.984 119.816C213.181 119.816 207.763 118.792 202.728 116.744C197.779 114.611 193.469 111.752 189.8 108.168C186.131 104.584 183.272 100.659 181.224 96.392L196.328 85.512Z" fill="black"/>
                <path d="M265.832 27.4H287.464V86.024C287.464 90.5467 288.659 94.216 291.048 97.032C293.437 99.848 297.021 101.256 301.8 101.256C306.664 101.256 310.291 99.848 312.68 97.032C315.069 94.216 316.264 90.5467 316.264 86.024V27.4H337.896V87.56C337.896 93.192 336.957 98.0987 335.08 102.28C333.288 106.461 330.728 109.917 327.4 112.648C324.157 115.293 320.317 117.299 315.88 118.664C311.528 120.029 306.835 120.712 301.8 120.712C296.765 120.712 292.072 120.029 287.72 118.664C283.368 117.299 279.528 115.293 276.2 112.648C272.957 109.917 270.397 106.461 268.52 102.28C266.728 98.0987 265.832 93.192 265.832 87.56V27.4Z" fill="black"/>
                <path d="M366.078 85.512C367.87 88.7547 369.875 91.5707 372.094 93.96C374.398 96.3493 376.873 98.184 379.518 99.464C382.249 100.744 385.107 101.384 388.094 101.384C391.251 101.384 393.854 100.616 395.902 99.08C397.95 97.4587 398.974 95.2827 398.974 92.552C398.974 90.248 398.377 88.4133 397.182 87.048C395.987 85.5973 394.067 84.232 391.422 82.952C388.777 81.672 385.278 80.2213 380.926 78.6C378.793 77.832 376.318 76.7653 373.502 75.4C370.771 74.0347 368.169 72.2853 365.694 70.152C363.219 67.9333 361.171 65.288 359.55 62.216C357.929 59.0587 357.118 55.2613 357.118 50.824C357.118 45.5333 358.483 40.968 361.214 37.128C364.03 33.288 367.785 30.3867 372.478 28.424C377.257 26.376 382.547 25.352 388.35 25.352C394.323 25.352 399.486 26.3333 403.838 28.296C408.275 30.2587 411.945 32.7333 414.846 35.72C417.747 38.7067 419.966 41.736 421.502 44.808L404.99 54.024C403.71 51.8907 402.217 50.056 400.51 48.52C398.889 46.8987 397.054 45.6613 395.006 44.808C393.043 43.8693 390.91 43.4 388.606 43.4C385.534 43.4 383.187 44.0827 381.566 45.448C379.945 46.728 379.134 48.3493 379.134 50.312C379.134 52.36 379.902 54.152 381.438 55.688C383.059 57.224 385.321 58.632 388.222 59.912C391.209 61.192 394.793 62.5573 398.974 64.008C402.131 65.2027 405.075 66.6107 407.806 68.232C410.537 69.768 412.926 71.6453 414.974 73.864C417.107 76.0827 418.771 78.6427 419.966 81.544C421.161 84.4453 421.758 87.7733 421.758 91.528C421.758 96.0507 420.819 100.104 418.942 103.688C417.15 107.187 414.675 110.131 411.518 112.52C408.446 114.909 404.905 116.701 400.894 117.896C396.969 119.176 392.915 119.816 388.734 119.816C382.931 119.816 377.513 118.792 372.478 116.744C367.529 114.611 363.219 111.752 359.55 108.168C355.881 104.584 353.022 100.659 350.974 96.392L366.078 85.512Z" fill="black"/>
                <path d="M427.262 46.728V27.4H498.174V46.728H473.47V117H451.838V46.728H427.262Z" fill="black"/>
                <path d="M562.151 27.4H586.983L555.623 80.52V117H533.607V80.648L502.247 27.4H527.079L544.615 61.064L562.151 27.4Z" fill="black"/>
                <path d="M596.347 27.4H617.979V98.44H653.947V117H596.347V27.4Z" fill="black"/>
                <path d="M678.308 117V99.208H723.492V117H678.308ZM678.308 45.192V27.4H723.492V45.192H678.308ZM678.308 78.6V61.192H720.932V78.6H678.308ZM663.972 27.4H684.708V117H663.972V27.4Z" fill="black"/>
                <path d="M63.407 16C64.607 8.8 72.907 2.33333 76.907 0H30.9071C-18.5929 16 -1.09295 75 30.9071 80H48.4071C75.9071 95 63.407 121 48.4071 126.5H17.9071V93L24.4071 85L8.90705 77L0.907054 93V143.5H51.4071C104.907 116.5 76.9071 68.5 51.4071 62H34.407C3.60704 43.6 21.5737 23.6667 34.407 16H63.407Z" fill={forestGreen}/>
                <path d="M81.411 127.5C80.211 134.7 71.911 141.167 67.911 143.5H113.911C163.411 127.5 145.911 68.5 113.911 63.5H96.411C68.911 48.5 81.411 22.5 96.411 17H126.911V50.5L120.411 58.5L135.911 66.5L143.911 50.5L143.911 0H93.411C39.911 27 67.911 75 93.411 81.5H110.411C141.211 99.9 123.244 119.833 110.411 127.5H81.411Z" fill={forestGreen}/>
        </svg>
        )
    }
}