import { Typography } from '~/components/typography';
import clsx from 'clsx';
import { StyledTextBlock } from '~/components/styled-text-block/styled-text-block';
import { Steps } from '~/pages/service/components/steps/steps';
import { Gallery } from '~/pages/service/components/gallery/gallery';
import { Questions } from '~/pages/service/components/questions/questions';
import { steps } from './components/steps/constants';
import styles from './index.module.scss';

export const WeddingPage = () => (
  <div className={clsx('page_paddings', styles.page)}>
    <div className={styles.title}>
      <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
        Свадебный макияж
      </Typography>
      <Typography className={styles.label}>
        Сияние, которое запомнится на всю жизнь!
      </Typography>
    </div>

    <StyledTextBlock>
      Свадебный день – один из самых важных в жизни, и каждая деталь должна быть безупречной.
      Макияж невесты – это не просто косметика, а искусство, которое подчеркнет твою красоту,
      сделает черты лица выразительными на фотографиях и сохранит свежесть до последнего танца.
    </StyledTextBlock>

    <Steps items={steps} title='Что входит в услугу свадебного макияжа?' />
    <Gallery />
    <Questions />
  </div>
);
