import React, { useState } from 'react';
import styles from './Navigation.module.css';
import logo from './twosome_logo.png';
import { Link } from 'react-router-dom';
// 메뉴리스트

const menuList = [
    {
        "브랜드스토리": {
            "브랜드이야기": "/brandStory",
            "커피이야기": "/coffeeStory",
            "디저트이야기": "/dessertStory",
            "브랜드필름": "/brandFilm",
        },
        id: "브랜드스토리"
    },
    {
        "메뉴": {
            "New": "/New",
            "커피&음료": "/coffeeAndDrink",
            "디저트": "/dessert",
            "델리": "/dely",
            "상품": "/present",
            "홀케이크": "/hallcake",
            "영양성분표": "/nutirition"
        },
        id: "메뉴"
    },
    {
        "매장정보": "/findStore",
        id: "매장정보"
    },
    {
        "투썸플레이스App": "/TwosomeApp",
        id: "투썸플레이스App"
    },
    {
        "이벤트": {
            "이벤트": "/event",
            "매장별이벤트": "/eventByStore",
            "멤버십&제휴카드": "/membership"
        },
        id: "이벤트"
    },
    {
        "가맹정보": {
            "창업정보 및 절차": "/startupInfo",
            "온라인창업상담": "/consultation",
            "FAQ": "/FAQ",
            "가맹점 전용 금융상품": "/financialInstruments"
        },
        id: "가맹정보"
    },
    {
        "창업설명회": "/businessFair",
        id: "창업설명회"
    },
    {
        "기업 및 단체구매안내": "/CorporateSales",
        id: "기업 및 단체구매안내"
    }
]

const CreateToggle = ({ object, name }) => {
    return (
        <div className={`${styles.createSubNavi} ${styles.showSubNavi}`}>
            <div className={styles.subNaviTitle}>{name}</div>
            <ul className={styles.subList}>
                {Object.keys(object).map(element => <li>{element}</li>)}
            </ul>
        </div>
    );
}

export default function Navigation() {
    const [clickedItem, setClickedItem] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavi = (e) => {
        const text = e.target.outerText;
        let textValue = Object.values(menuList.filter(element => element.id === text)[0]);
        setClickedItem(clickedItem => clickedItem = textValue);
        setIsOpen(isOpen => !isOpen)
    }
    return (
        <div className={styles.header}>
            <Link to="/#"><img src={logo} alt={logo} /></Link>
            <div className={styles.flex_box}>
                <ul className={styles.navigationList}>
                    {menuList.map(element => {
                        return (
                            <li onClick={toggleNavi} key={element.id} className={styles.mainNavi}>
                                <span className={styles.mainList}> {Object.keys(element)[0]} </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
                <div className={styles.createSubNavi}></div>
                {isOpen && typeof clickedItem[0] === "object" && <CreateToggle object={clickedItem[0]} name={clickedItem[1]} />}
                <div className={styles.memberAnnouncement}>
                    <span className={styles.member}>
                        <Link to={"/login"}>로그인</Link>|
                        <Link to={"/signUp"}>회원가입</Link>
                    </span>
                    <span className={styles.service}>
                        <Link to={"/customerService"}><span>고객센터</span></Link>|
                        <Link to={"/announcement"}><span>뉴스및공지</span></Link>
                    </span>
                </div>
        </div >
    );
}