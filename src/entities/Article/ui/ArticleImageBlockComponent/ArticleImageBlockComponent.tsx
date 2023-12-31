import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block?: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img alt={block?.title} src={block?.src} className={cls.img} />
        {block?.title && (
            <Text title={block?.title} className={cls.title} align={TextAlign.CENTER} />
        )}
    </div>
));
