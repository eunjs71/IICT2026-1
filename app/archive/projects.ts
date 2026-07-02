export const projects = [
    {
        title: "Bead Garden",
        src: "/images/thumbnails/BeadGarden.png",
        students: ["최민서", "김다현", "손예원", "신승주", "이다은"],
        githubLink: "https://github.com/t99d99t99t99/BeadGarden",
        pageLink: "https://t99d99t99t99.github.io/BeadGarden/",
    },
    {
        title: "Type2Knit",
        src: "/images/thumbnails/type2knit.png",
        students: ["전수정", "권예빈", "최유리", "최윤희", "홍세위"],
        githubLink: "https://github.com/xxykens/ICTI_Type2Knit",
        pageLink: "https://xxykens.github.io/ICTI_Type2Knit/",
    },
    {
        title: "Interactive Campus",
        src: "/images/thumbnails/interactiveCampus.png",
        students: ["김미정", "김지현", "손현우", "이주영", "한정우"],
        githubLink: "https://github.com/Jungwoo-Han/InteractiveCampus",
        pageLink: "",
    },
    {
        title: "Re:summER",
        src: "/images/thumbnails/resummer.png",
        students: ["허승빈", "권현준", "김주연", "김예원", "이시흥"],
        githubLink: "https://github.com/hsfzh/RE-summER",
        pageLink: "https://hsfzh.github.io/RE-summER/",
    },
    {
        title: "도파민 때문에",
        src: "/images/thumbnails/dopamin.png",
        students: ["김지형", "박찬영", "이수빈", "전소은", "조주형"],
        githubLink: "https://github.com/GPC6/IICT2026-1TeamProject",
        pageLink: "https://gpc6.github.io/IICT2026-1TeamProject/",
    },
    {
        title: "나비효과",
        src: "/images/thumbnails/butterflyEffect.png",
        students: ["김민", "성민곤", "이연주", "지현선", "최윤서"],//
        githubLink: "https://github.com/hyunsunny11/ButterflyEffect",
        pageLink: "https://hyunsunny11.github.io/ButterflyEffect/",
    },
    {
        title: "InstaCrime#404",
        src: "/images/thumbnails/instaCrime404.png",
        students: ["윤정", "김승주", "문지유", "안호", "원지윤", "하채림"],
        githubLink: "https://github.com/2wa6bune1/InstaCrime404",
        pageLink: "https://2wa6bune1.github.io/InstaCrime404/",
    },
    {
        title: "일일산수",
        src: "/images/thumbnails/dailyRomance.png",
        students: ["김세현", "노현주", "박은수", "정현서", "조경민"],
        githubLink: "https://github.com/Sehyun-Selene/Romance",
        pageLink: "https://daily-romance.vercel.app/",
    },
    {
        title: "쿨레쇼프 네컷",
        src: "/images/thumbnails/kuleshov.png",
        students: ["신서윤"],
        githubLink: "",
        pageLink: "",
    },
];

export const getProjects = () => {
    return projects.sort(() => Math.random() - 0.5);
}