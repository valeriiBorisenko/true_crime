import mainImg from '../img/main.png'; 
import googlePlayIcon from '../img/socials/googleplay.svg';
import appleStoreIcon from '../img/socials/applestore.svg';
import telegramIcon from '../img/socials/telegram.svg';

export const content = {
  mobilePlaceholder: {
    title: 'Нужен экран побольше',
    description:
      'На телефоне и планшете страница недоступна. Откройте сайт с компьютера или ноутбука.',
  },
  app: {
    title: 'ХРОНИКИ ПРЕСТУПЛЕНИЙ',
    subtitle: 'Бродвейский Потрошитель. Выведи AI-маньяка на чистую воду!',
    aboutTitle: 'О проекте',
    aboutDescription: [
      '«Хроники Преступлений» — это детективная новелла, где вы общаетесь с персонажами как с живыми людьми, а не выбираете готовые реплики, что делает каждую сцену уникальной и непредсказуемой.',
			],
    inviteHeroAlt: 'Иллюстрация к анкете',
  },
  heroSlider: {
    introHeroAlt: 'Фауст',
    openDossierLabel: 'Открыть досье',
    startLabel: 'Листать досье',
  },
  quizButton: {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdLosgya43oQMycBSlQczwHr98R7E6fi8Ng3D15ilD2_HDo2A/viewform?usp=dialog',
    lead: 'ЗАПОЛНИТЕ АНКЕТУ',
    subline: 'по завершению прохождения и получите ранний доступ к игре',
    openLabel: 'Открыть анкету',
  },
  gameFrame: {
    title: 'True Crime Unity Game',
    src: 'https://truecrime-stable.netlify.app/',
  },
  gameFrameImage: {
    src: mainImg,
    alt: 'Приглашение',
    socials: {
      googleplay: {
        icon: googlePlayIcon,
        alt: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.VivexCompany.TrueCrime',
      },
      applestore: {
        icon: appleStoreIcon,
        alt: 'Apple Store',
        href: 'https://apps.apple.com/by/app/%D0%BF%D0%BE%D1%82%D1%80%D0%BE%D1%88%D0%B8%D1%82%D0%B5%D0%BB%D1%8C-%D0%B1%D1%80%D0%BE%D0%B4%D0%B2%D0%B5%D1%8F-%D0%B4%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2/id6780802343',
      },
      telegram: {
        icon: telegramIcon,
        alt: 'Telegram',
        href: 'https://t.me/truecrimebp',
      },
    },
  },
}
