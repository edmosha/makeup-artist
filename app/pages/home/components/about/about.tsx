import { Typography } from '~/components/typography';
import { StyledTextBlock } from '~/components/styled-text-block/styled-text-block';
import Me from '~/assets/img/about.jpg';
import styles from './index.module.scss';

export const About = () => (
  <div className={styles.about}>
    <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
      Обо мне
    </Typography>
    <StyledTextBlock disablePadding>
      Привет, я Настя — профессиональный визажист,
      который превратит твою естественную красоту в произведение искусства.
    </StyledTextBlock>
    <div className={ styles.block_with_photo }>
      <div className={styles.content_column}>
        <StyledTextBlock indentPct={0} disablePadding>
          Неважно, готовитесь ли вы к свадьбе,
          фотосессии или важному событию — я создам макияж,
          который подчеркнёт твою индивидуальность и заставит
          тебя чувствовать себя неотразимой.
        </StyledTextBlock>
        <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
          Почему выбирают меня?
        </Typography>
        <Typography size='3XL' className={styles.why_me}>
          — <b>7 лет в индустрии</b> красоты и 500+ довольных клиентов<br/>
          — <b>Работаю с любым типом кожи и чертами лица</b> – даже если ты считаешь, что тебе «ничего не идет», я докажу
          обратное.<br/>
          — <b>Делаю не только красиво, но и комфортно</b> – ваш образ будет стойким, а кожа – дышащей даже под плотным
          тоном.<br/>
          — <b>Безупречный результат</b> — работаю только с профессиональной косметикой премиум-класса (Dior, Charlotte
          Tilbury, MAC)<br/>
          — <b>Индивидуальный подход</b> — подберу идеальные оттенки и технику под ваш тип кожи и черты лица<br/>
        </Typography>
      </div>
      <img src={Me} alt='me'/>
    </div>
  </div>
);
