export const CATEGORIES = {
    WORK: 'work',
    HEALTH: 'health',
    RELATIONSHIP: 'relationship',
    FINANCE: 'finance',
    
}
export const CATEGORY_LABEL = {
    [CATEGORIES.WORK]:'Work',
    [CATEGORIES.RELATIONSHIP]:'Relationship',
    [CATEGORIES.HEALTH]:'Health',
    [CATEGORIES.FINANCE]:'Finance',
}
export const CATEGORY_INFO = {
    [CATEGORIES.WORK]: {
        name:'Career & Work',
        icon:'💼',
        description:'Professional level advices',
        color:'white'
    },
    [CATEGORIES.RELATIONSHIP]: {
        name:'Relationship',
        icon:'❤️',
        description:'Love advie from hell',
        color:'white'
    },
    [CATEGORIES.HEALTH]: {
        name:'Health & Wellness',
        icon:'🩺',
        description:'Wellness tips',
        color:'white'
    },
    [CATEGORIES.FINANCE]: {
        name:' Money & Finance',
        icon:'💸',
        description:'Finance ruins ideas',
        color:'white'
    },
}
export const SERIOUSNESS_LEVELS = {
    MILD:1,
    MODERATE:2,
    SEVERE:3,
    UNHINGED:4
}
export const  SERIOUSNESS_LABEL = {
    [SERIOUSNESS_LEVELS.MILD]:'Mildly Terrible',
    [SERIOUSNESS_LEVELS.MODERATE]:'Moderate Terrible',
    [SERIOUSNESS_LEVELS.SEVERE]:'Severly Terrible',
    [SERIOUSNESS_LEVELS.UNHINGED]:'Completely Terrible'
}

    
export const ADVICE_DATA = {
      [CATEGORIES.WORK]: {
        [SERIOUSNESS_LEVELS.MILD]: [
            "Reply to all emails with just 'Noted.' and nothing else.",
            "Start every meeting by asking 'Is this really necessary?'",
            "Use Comic Sans for all your professional documents.",
            "Begin every presentation with 'As you can see, I'm not prepared.'",
            "Replace your email signature with inspirational quotes from cartoon characters."
        ],
        [SERIOUSNESS_LEVELS.MODERATE]: [
            "Communicate exclusively through interpretive dance during video calls.",
            "Start referring to your boss as 'Your Majesty' in all correspondence.",
            "Replace all your work clothes with pajamas. Comfort is productivity!",
            "Begin every sentence with 'In my professional opinion as someone who Googled this...'",
            "Use only rhyming couplets when speaking to colleagues."
        ],
        [SERIOUSNESS_LEVELS.SEVERE]: [
            "Quit your job via interpretive mime performance in the break room.",
            "Start a workplace revolution by replacing all office supplies with pool noodles.",
            "Conduct all meetings while doing yoga poses. Downward dog = power move.",
            "Replace your computer with an Etch-a-Sketch for that authentic analog feel.",
            "Insist on being paid in cryptocurrency you invented called 'WorkCoin.'"
        ],
        [SERIOUSNESS_LEVELS.UNHINGED]: [
            "Establish dominance by arriving to work in a hot air balloon every day.",
            "Replace all office furniture with trampolines. Bouncing = brainstorming!",
            "Start a cult worshipping the office printer. It deserves recognition.",
            "Communicate only through elaborate shadow puppet shows projected on the wall.",
            "Declare yourself the office's Minister of Fun and demand a cabinet position."
        ]
    },
    [CATEGORIES.RELATIONSHIP]: {
        [SERIOUSNESS_LEVELS.MILD]: [
            "Start all conversations with 'According to my research...' even about feelings.",
            "Replace 'I love you' with 'You're acceptable to me.'",
            "Communicate exclusively through movie quotes for a week.",
            "Rate every date on Yelp like it's a restaurant experience.",
            "Use PowerPoint presentations to discuss relationship issues."
        ],
        [SERIOUSNESS_LEVELS.MODERATE]: [
            "Communicate with your partner only through interpretive dance.",
            "Start referring to your relationship as a 'strategic partnership.'",
            "Replace all pet names with corporate buzzwords like 'synergy' and 'stakeholder.'",
            "Conduct relationship meetings with formal agendas and minutes.",
            "Express emotions only through elaborate food sculptures."
        ],
        [SERIOUSNESS_LEVELS.SEVERE]: [
            "Propose marriage via flash mob of people dressed as your favorite condiments.",
            "Start dating multiple people and manage them like a fantasy sports league.",
            "Replace all romantic gestures with elaborate treasure hunts that lead nowhere.",
            "Communicate feelings only through custom-made board games.",
            "Insist on wearing matching outfits that you design yourself using finger paints."
        ],
        [LEVELS.UNHINGED]: [
            "Establish a relationship court where all disputes are settled by trial by combat with pool noodles.",
            "Replace all furniture in your home with bouncy castles for 'relationship flexibility.'",
            "Communicate only through messages written in skywriting by trained pigeons.",
            "Start a polyamorous relationship with houseplants and introduce them at family dinners.",
            "Propose by hiring a mariachi band to follow your partner around for three months straight."
        ]
    },
    [CATEGORIES.MONEY]: {
        [SERIOUSNESS_LEVELS.MILD]: [
            "Invest all your savings in beanie babies. They're due for a comeback.",
            "Start a budget using only Monopoly money for authenticity.",
            "Pay all bills with handwritten IOUs featuring your artistic doodles.",
            "Replace your wallet with a sock. It's more aerodynamic.",
            "Invest in companies based solely on how fun their names sound."
        ],
        [SERIOUSNESS_LEVELS.MODERATE]: [
            "Start your own cryptocurrency called 'MoneyMoney' and use it exclusively.",
            "Replace all financial planning with Magic 8-Ball consultations.",
            "Invest your retirement fund in a time machine to go back and buy Bitcoin.",
            "Start a business selling air in jars to people who 'need fresh perspectives.'",
            "Use a ouija board for all investment decisions. The spirits know best."
        ],
        [SERIOUSNESS_LEVELS.SEVERE]: [
            "Quit your job to become a professional treasure hunter in your backyard.",
            "Start a pyramid scheme selling pyramid schemes. It's meta-profitable!",
            "Replace your bank account with a piggy bank shaped like your favorite celebrity.",
            "Invest everything in a company that makes left-handed screwdrivers for right-handed people.",
            "Start charging your friends rent for existing in your general vicinity."
        ],
        [SERIOUSNESS_LEVELS.UNHINGED]: [
            "Establish your own country in your living room and print your own currency.",
            "Start a business training goldfish to be financial advisors.",
            "Replace the stock market with a giant game of rock-paper-scissors.",
            "Invest your life savings in a machine that turns thoughts into pennies.",
            "Start a bank that only accepts payments in interpretive dance performances."
        ]
    },
    [CATEGORIES.HEALTH]: {
        [SERIOUSNESS_LEVELS.MILD]: [
            "Replace all vegetables with gummy vitamins. They're basically the same thing.",
            "Start every workout by dramatically announcing your intentions to the gym.",
            "Use a Magic 8-Ball to make all medical decisions.",
            "Replace water with energy drinks. Hydration is just marketing.",
            "Diagnose yourself using only WebMD and pure intuition."
        ],
        [SERIOUSNESS_LEVELS.MODERATE]: [
            "Replace all exercise with aggressive furniture rearranging.",
            "Start a diet consisting only of foods that rhyme with your name.",
            "Use crystals as your primary healthcare providers.",
            "Replace sleep with power naps taken while standing up.",
            "Communicate with your body by writing it formal letters of complaint."
        ],
        [SERIOUSNESS_LEVELS.SEVERE]: [
            "Replace all medical appointments with séances to consult deceased doctors.",
            "Start a fitness routine based entirely on interpretive dance battles.",
            "Use only medieval medical practices because they're 'more authentic.'",
            "Replace your doctor with a Magic 8-Ball that you've named Dr. Ball.",
            "Start a diet where you only eat foods that match your outfit."
        ],
        [SERIOUSNESS_LEVELS.UNHINGED]: [
            "Replace your entire skeleton with pool noodles for maximum flexibility.",
            "Start a medical practice where you diagnose people by reading their auras through interpretive dance.",
            "Replace all medicine with positive thinking and aggressive jazz hands.",
            "Establish a hospital run entirely by trained dolphins in your swimming pool.",
            "Start a fitness program where you exercise by arguing with inanimate objects."
        ]
    }
}
    