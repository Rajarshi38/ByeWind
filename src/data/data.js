import AccountIcon from "../components/svg/AccountIcon";
import BlogIcon from "../components/svg/BlogIcon";
import BroadcastIcon from "../components/svg/Broadcast";
import BugIcon from "../components/svg/BugIcon";
import CorporateIcon from "../components/svg/Corporate";
import DefaultIcon from "../components/svg/Default";
import EcommerceIcon from "../components/svg/ECommerce";
import OnlineCoursesIcon from "../components/svg/OnlineCourses";
import ProjectsIcon from "../components/svg/Projects";
import SocialIcon from "../components/svg/SocialIcon";
import UserIcon from "../components/svg/UserIcon";

export const leftSidebarData = [
  {
    title: "Dashboards",
    sections: [
      {
        name: "Default",
        isExpandable: false,
        isSelected: true,
        icon: DefaultIcon,
      },
      {
        name: "eCommerce",
        isExpandable: true,
        isSelected: false,
        icon: EcommerceIcon,
      },
      {
        name: "Projects",
        isExpandable: true,
        isSelected: false,
        icon: ProjectsIcon,
      },
      {
        name: "Online Courses",
        isExpandable: true,
        isSelected: false,
        icon: OnlineCoursesIcon,
      },
    ],
  },
  {
    title: "Pages",
    sections: [
      {
        name: "User Profile",
        isExpandable: true,
        isSelected: false,
        isExpanded: true, // Indicates that the section is currently expanded
        subTabs: [
          "Overview",
          "Projects",
          "Campaigns",
          "Documents",
          "Followers",
        ],
      },
      {
        name: "Account",
        isExpandable: true,
        isSelected: false,
        icon: AccountIcon,
      },
      {
        name: "Corporate",
        isExpandable: true,
        isSelected: false,
        icon: CorporateIcon,
      },
      { name: "Blog", isExpandable: true, isSelected: false, icon: BlogIcon },
      {
        name: "Social",
        isExpandable: true,
        isSelected: false,
        icon: SocialIcon,
      },
    ],
  },
];

export const notificationData = [
  {
    id: crypto.randomUUID(),
    icon: BugIcon,
    data: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    id: crypto.randomUUID(),
    icon: UserIcon,
    data: "New user registered",
    time: "59 minutes ago",
  },
  {
    id: crypto.randomUUID(),
    icon: BugIcon,
    data: "You have a bug that needs to be fixed.",
    time: "12 hourse ago",
  },
  {
    id: crypto.randomUUID(),
    icon: BroadcastIcon,
    data: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

export const activitiesData = [
  {
    user: {
      avatar:
        "https://s3-alpha-sig.figma.com/img/5618/07e2/4f384b89a83502e0c6fc6cbc98817827?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HV7X0TAfOdZG6dgPeu4chkoe0~eu16nQ25ZAMPnQs0CUmBh97L-41W0jfOSaB9eFtAx2~S5SuCfdusXa-nSjFkqmTcw9peXOjLRLrERPggRkAkYRz9cfc2NClqX~i~DeuJKGskw3PRymP~3d~iT3UEGlH~sA-bhrcQDlqno~3XA4Xtm5iZbp1VZgFDl8Jn0EKECQmnlPSXqmYjSzOllG-oBHfHacBtkyCLeixrbsci3NCoJ15mki59xnhfPwXBH0thGZ14Kzdqo8nyx4Ce4rnxLQg~EuocKqeUrSWY9ZvUksMg~36yaQr3f74zgDIAu5wVld0oV5Ec2iKubuD~5MXw__",
    },
    activity: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    user: {
      avatar:
        "https://s3-alpha-sig.figma.com/img/d225/6170/d5e524fdf1c0cb0268978c382c982775?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3sZaR9C6TFuaGur1L0yfo9aClPdf8y69MtKQXjZhVXJoBwNMZJEjDIY6Np3ghvrBsIGmMVPLONgdXEZKawjnEash~8M686pDuBiiCJft3dUoVjGgmzMSwxMfRs2S0y-7Wm2Q74oOe7Tkep-RwW6qtcHhozvlorPsroU2P0arZwKvyYztOt0rvfQLLAVPP36cimhfUhA6JNGmZ-vCirm0OaYX9BvdT9zUF3X2zP0tXrVZ3PCw~Xy3fQCD48yUi7b5SkjQqMc7onVd5j0afxuCz10D3p7xrBlRiQtZCHyj3tq1fWvT5vMoRY39KeX7UoRatoE5eAWb5wpaad845H-Ag__",
    },
    activity: "Released a new version",
    time: "59 minutes ago",
  },
  {
    user: {
      avatar:
        "https://s3-alpha-sig.figma.com/img/d638/1ed9/535faedb3171ebf24cc083c421af6a8c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GsTl87clw4xjPcV1nBkXXkDUgs5B9n6Bai4ItRNvzKeH2UHXrhhTq-cmuWHJFvEOGFXm2enhKk46ON9yCZe5R7U2dpmkZ8nsg~Gu8zyl6MywwburPG8v8gy8FC-4~ClJ3pjXMoHxTVWK0mndEBuc5PgVN9S4tl6qj1lpx9Q-6MKUTcW1snrl8p6dNL4v0r64CFI5JnePTPd2Vmfk0~HC7MVM~KMTTwYHVFfbT5BNKsqmKQ8cO2P~VthtFzL5pGNg4NuwUYcGauI8sorMa6kcKoE3MFybWwo6X2G1HV8~Xhb-uGA2s22sxAdiL9J8FyJLqxwBHn0nc6lc6QNJchUirA__",
    },
    activity: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    user: {
      avatar:
        "https://s3-alpha-sig.figma.com/img/4016/70ae/04e9f56b8607ab9a75364d523fa15c7f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRDXamJ0qK8SZihJzEFcF48Dcm0bXP4Ow7X2dm4E77ucGzKQqPzXjxstwQcJKdrxfc1u3jz7JoMnKzVkMiZM2p-W3ihleo9UjhternUPujGsZG2afBJ4GqaKbuoyQkekiiF6bt~bwBTgkSUww6Mxn3KADK4U7kGeFAudRXNm0-Pnu-Eep6GhmZhQ4xn8HU-CGO3nUbVGScAlh90qe8OoASiY-N4Xids4Y~NDsm-bMQ8678O-sY5ERfXZgWJFfjW2q9sBwES2Yxpg5mUErc1WOqZRiF1l~qWswRF8Z-eR~tLeBxzV1JH-Ntgiw6IBsW1V2j9EV6cwjQ4YVaalRZ2IzQ__",
    },
    activity: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    user: {
      avatar:
        "https://s3-alpha-sig.figma.com/img/a336/8d2b/4bf149055875cb73bd98f1b0dc6f1cfb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XaORw6wleyAPMLSmNLfcerj8Tw2fXWpM6djMQdLFrOD43ydlnUBQoL0-7P899yUP4olna1Rd7ZCA4sY7~hcE5pmCBxvu5lgAbr9NLeiBOW7-lHFTQFpEPPmGrX~AWCPoYF0L9MiSyccwyK84ITnHMTQdcKlV2a63BNwCzgLuXcYAN8J6fivHcrAF6NgnvoehPeQ0T-g90hVaSwbOKCPUDkjEjNaJGu8XZXZjd5JCVKifwW3uge4ZmDl3PNEdLn5TID-ZHU27DA0C6vZLvfhJlIjuXK7KyTYFgKZaQ5hyG1PQcVLLKJuZACAkOMxDYJQnCLJGqsJRQgBeJ66TF4k2kQ__",
    },
    activity: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

export const contactsData = [
  {
    name: "Natali Craig",
    avatar:
      "https://s3-alpha-sig.figma.com/img/8c91/08b9/d537ec99e7358705dde01753cd94f355?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oy8OBw1~ESIN~-AxoalTqP7~46ibhus~VaUq7W05RsNSLzrGPgjI1YsbkX42xW~Iza-7eFMWHTbq0Lni3jqx9uEbtHy4RtJ4ZwKU7HTuMvMTL0Z9LoeiXSqe7M-vznElYlPjmiHIHCQjodYE8QvuUo3XYGsAX7h9KQMZPqEBzIMf-q8aOdX46HO9KciWhal0GOqS5i8Q6wkvGa6Pq9zqBXoXUerYakzl4dTdF-2c6WsHl26X9dCCdHV4MMw16jr8ambvjaMpEdHwC-4Aue~L5u0xCeuvTCEqxmK82mtCNVWaoK5DEWzej8nLmbP5XaRhymYh0queR5ik-wS5cbTHUQ__",
  },
  {
    name: "Drew Cano",
    avatar:
      "https://s3-alpha-sig.figma.com/img/6389/ca3c/52596b27ea5732f2c15e17045ba5d34a?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qgawe4x33J2RG3OXWHNXHP8pIMrA7kP82L0lkMUNRB35ViKnAGP1CiMSDI81IhjCmja7qr6KR2797yC9lfhbSq27KsQbFzHXB90l1zgpiWovsdE6uPOCJl8EtQf6p5HGuNokOP7KexMVexYFnTqLsiLjKQ4NOCkmV9UV17xk68UxCnHX1FeYnRBZIaORXfZGJxYJGV64deAkiItz~znJPrBdAaeeC2xaBAT19kPsFZ7CadxAzwiz3VIp8AG7OPtBTViDHc-4YIVEdl~R-haXf1~lJshB9DeRt5sHgUqRzEr-1c2gitZpOqqRF~n08mjK0FN4W0s-oyjDPUXJPffCNQ__",
  },
  {
    name: "Orlando Diggs",
    avatar:
      "https://s3-alpha-sig.figma.com/img/dec3/62c5/6cff97abab207d069ac8d088ec898aaa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUItWW7iojnDIDJ2sROQcDrcimbMcong8F6Yidgeq25JATY~7oStJ-tYRnW9IUyYiUUXY9LnaH6TZrOXrurTa6olcasnfr7yC40csfPDw2MA8F3PpEeu0CQY-rJEUeoW4eYJb8D-A47U3BdRGggjkU32gQ1aKKU48cNNDwXCxqB~2bjdUehamvMa0ZaFiJRkECIz~vIuCltkjgSIU9Mu-p6p9hPTXRkZmY2cc9zMq~d17f0CdqtyuJaix4~7tGHvqi1ZPSNZEujaAXnluHVWuw5cz~QHhVcB3ATc9E2EpAWcQxh8RLOIwfEA~WnNwsQGEj7O5KZBVQpMKrJW5T~2zw__",
  },
  {
    name: "Andi Lane",
    avatar:
      "https://s3-alpha-sig.figma.com/img/dec3/62c5/6cff97abab207d069ac8d088ec898aaa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUItWW7iojnDIDJ2sROQcDrcimbMcong8F6Yidgeq25JATY~7oStJ-tYRnW9IUyYiUUXY9LnaH6TZrOXrurTa6olcasnfr7yC40csfPDw2MA8F3PpEeu0CQY-rJEUeoW4eYJb8D-A47U3BdRGggjkU32gQ1aKKU48cNNDwXCxqB~2bjdUehamvMa0ZaFiJRkECIz~vIuCltkjgSIU9Mu-p6p9hPTXRkZmY2cc9zMq~d17f0CdqtyuJaix4~7tGHvqi1ZPSNZEujaAXnluHVWuw5cz~QHhVcB3ATc9E2EpAWcQxh8RLOIwfEA~WnNwsQGEj7O5KZBVQpMKrJW5T~2zw__",
  },
  {
    name: "Kate Morrison",
    avatar:
      "https://s3-alpha-sig.figma.com/img/a459/3a2a/50ce3a2707fa1e7e6a708825369f6266?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INcpU0fI2n6-K3Q-uojDT2rJ74TomMiuc7t4dPBVIuTAuhMtrWdolP27dKx26i6~CxkozMrcgUAty-bGghK3HeYEd3Xufb-r5HmYsvOXnEQ3ySOlWr~X7TO0JNPlx7KjKUQs~OZKaY7mSEqy7grc7byWA-wxclAR5ZL6OTZYGXpuKqmj3UdssQbkXAW4nKsXbi~ssSA6fC9Z4v94CfXp8qm~GkIKRd51~hds2RpnEvVCeQcupLLkWaTMF5wL904wPBWcIeTEkO8U3lNuOma96QetMo2dUJRO8mV0lghoT~0324~GT36xiVx5c7bpr9mLCM7nVeisxLmgEzUtSHD8Qw__",
  },
  {
    name: "Koray Okumus",
    avatar:
      "https://s3-alpha-sig.figma.com/img/f005/c119/96e0e2c36ac52d5ba8f5f0e7862fe055?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYqvsRsR-MDZJC6S346KeiK9Dnls2bcHB1mdNA20vr2NSyRapsG-mR9oLiM7Jw0UxN4xzSjyPcb3O05j9b7DdKrqZmEeZPRnjNq8CmSCEMw3~UYTh7tY1QynrsKpIcnUyBB09TgH0Uja5foggpJl6FJ5oJuOwttzP2ieRZJGCwdRBy~2mT2EmToYl7-5kISqmIh4luzTnmY3fNrw1UhW2uqSm1hJoWTkPe9Z8jC5Apdj1ufEULooEY5QhAlIVUbjmO-VEOkV1-gbngU1kSRdw1PHxuboJlcQNvH7qImRXB9j61KNurc6WKSYSDv1Lq2nGuYKOkFCC94zELcvAWfZlw__",
  },
];

export const stats = [
  {
    id: 1,
    title: "Customers",
    value: "3,781",
    stat: {
      value: "+11.01%",
      type: "profit",
    },
  },
  {
    id: 2,
    title: "Orders",
    value: "1,219",
    stat: {
      value: "-0.03%",
      type: "loss",
    },
  },
  {
    id: 3,
    title: "Revenue",
    value: "$695",
    stat: {
      value: "+15.03%",
      type: "profit",
    },
  },
  {
    id: 4,
    title: "Growth",
    value: "30.1%",
    stat: {
      value: "+6.08%",
      type: "profit",
    },
  },
];
