import Image from "next/image";
import styles from "./page.module.css";

const App = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image width={140} height={24} src="/images/logo_welbex.png" />
          <sub className={[styles.textSub2, styles.logoSub].join(" ")}>
            крупный интегратор CRM в России и ещё 8 странах
          </sub>
        </div>
        <nav className={styles.nav}>
          <a className={styles.textNav}>Услуги</a>
          <a className={styles.textNav}>Виджеты</a>
          <a className={styles.textNav}>Интеграции</a>
          <a className={styles.textNav}>Кейсы</a>
          <a className={styles.textNav} id={styles.certificates}>
            Сертификаты
          </a>
        </nav>
        <a
          className={[
            styles.textMd,
            styles.stripUnderline,
            styles.phoneTop,
          ].join(" ")}
          href="tel:+75555555555"
        >
          +7 555 555-55-55
        </a>
        <div className={styles.socialContainerTop}>
          <Image height={20} width={20} src="/icons/telegram.svg" />
          <Image height={20} width={20} src="/icons/viber.svg" />
          <Image height={20} width={20} src="/icons/whatsapp.svg" />
        </div>
      </header>
      <div className={styles.redBlur} />
      <div className={styles.purpleBlur} />
      <img
        src="/images/md_red_ball.svg"
        className={styles.mdRedBall}
      />
      <img
        src="/images/sm_red_ball.svg"
        className={styles.smRedBall}
      />
      <img
        src={"/images/purple_ball.svg"}
        className={styles.purpleBall}
      />
      <main className={styles.main}>
        <div className={styles.mainSubContainer}>
          <h1 className={styles.textTitle}>Зарабатывайте больше</h1>
          <h1 className={[styles.textTitle, styles.textWelbex].join(" ")}>
            с WELBEX
          </h1>
          <sub
            className={[styles.textTitleSub, styles.textWelbexSub].join(" ")}
          >
            Развиваем и контролируем продажи за вас
          </sub>
        </div>
        <div className={styles.mainSubContainer}>
          <h2
            className={[styles.textH2Features, styles.textGradientRight].join(
              " "
            )}
          >
            <span
              className={[styles.textTitle2, styles.textNoGradient].join(" ")}
            >
              Вместе с 
            </span>
            бесплатной консультацией{" "}
            <span
              className={[styles.textTitle2, styles.textNoGradient].join(" ")}
            >
              мы дарим:
            </span>
          </h2>
          <div className={styles.featuresGrid}>
            <div className={styles.gridItem}>
              <h3 className={styles.textFeatureMobile}>Skype аудит</h3>
              <h3 className={styles.textFeatureTitle}>Виджеты</h3>
              <sub className={styles.textFeatureSub}>30 готовых решений</sub>
            </div>
            <div className={styles.gridItem}>
              <h3 className={styles.textFeatureMobile}>30 виджетов</h3>
              <h3 className={styles.textFeatureTitle}>Dashboard</h3>
              <sub className={styles.textFeatureSub}>
                с показателями вашего бизнеса
              </sub>
            </div>
            <div className={styles.gridItem}>
              <h3 className={styles.textFeatureMobile}>Dashboard</h3>
              <h3 className={styles.textFeatureTitle}>skype аудит</h3>
              <sub className={styles.textFeatureSub}>
                отдела продаж и CRM системы
              </sub>
            </div>
            <div className={styles.gridItem}>
              <h3 className={styles.textFeatureMobile}>Месяц AmoCRM</h3>
              <h3 className={styles.textFeatureTitle}>35 дней</h3>
              <sub className={styles.textFeatureSub}>использвания CRM</sub>
            </div>
          </div>
          <button className={[styles.buttonConsult, styles.textMd].join(" ")}>
            Получить консультацию
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerItemList}>
          <div className={styles.footerItemContainer}>
            <h4 className={styles.textHeadingSm}>О Компании</h4>
            <div className={[styles.footerLinkList, styles.textMd].join(" ")}>
              <a>Партнёрская программа</a>
              <a>Вакансии</a>
            </div>
          </div>
          <div
            className={[styles.footerItemContainer, styles.fillFlex].join(" ")}
          >
            <h4 className={styles.textHeadingSm}>Меню</h4>
            <div className={styles.footerMenuGrid}>
              <div className={[styles.footerLinkList, styles.textMd].join(" ")}>
                <a>Расчет стоимости</a>
                <a>Услуги</a>
                <a>Виджеты</a>
                <a>Интеграция</a>
                <a>Наши клиенты</a>
              </div>
              <div className={[styles.footerLinkList, styles.textMd].join(" ")}>
                <a className={styles.linkMobile}>Благодарность клиентов</a>
                <a>Кейсы</a>
                <a className={styles.linkDesktop}>Благодарственные письма</a>
                <a>Сертификаты</a>
                <a>Блог на Youtube</a>
                <a>Вопрос / Ответ</a>
              </div>
            </div>
          </div>
          <div className={styles.footerItemContainer}>
            <h4 className={[styles.textHeadingSm, styles.alignRight].join(" ")}>
              Контакты
            </h4>
            <div
              className={[
                styles.footerContactsList,
                styles.textMd,
                styles.alignRight,
              ].join(" ")}
            >
              <a
                className={[styles.textMd, styles.stripUnderline].join(" ")}
                href="tel:+75555555555"
              >
                +7 555 555-55-55
              </a>
              <div className={styles.socialContainerBottom}>
                <Image height={20} width={20} src="/icons/telegram.svg" />
                <Image height={20} width={20} src="/icons/viber.svg" />
                <Image height={20} width={20} src="/icons/whatsapp.svg" />
              </div>
              <span>Москва, Путевой проезд 3с1, к 902</span>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <span className={[styles.textSub3].join(" ")}>
            ©WELBEX 2022. Все права защищены.
          </span>
          <span className={[styles.textSub3, styles.textUndeline].join(" ")}>
            Политика конфиденциальности
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
