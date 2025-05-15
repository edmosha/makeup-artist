import clsx from 'clsx';
import { Typography } from '~/components/typography';
import { StyledTextBlock } from '~/components/styled-text-block/styled-text-block';
import { Steps } from '~/pages/service/components/steps/steps';
import { Feedback } from '~/components/feedback/feedback';
import { blocks } from './components/steps/constants';
import styles from './index.module.scss';

export const BasePage = () => (
  <div className={clsx('page_paddings', styles.page)}>
    <div className={styles.title}>
      <Typography size='6XL' variant='title' as='h2' className={'title_shadow'}>
        Это база
      </Typography>
    </div>

    <StyledTextBlock>
      Такой курс подойдет для тех, кто хочет освоить ежедневный макияж с нуля.
      Ведь я познакомлю тебя с базовым составом косметички и поделюсь своими лайфхаками в макияже.
    </StyledTextBlock>

    <Steps items={blocks} title='Что входит в курс «Это база»?' />
    <Feedback />
  </div>
);
