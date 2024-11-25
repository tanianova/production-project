import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Article } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)];

// @todo доделать- не работает
// Normal.parameters = {
//     mockData: [
//         {
//             url: `${__API__}/articles?_limit=3`,
//             method: 'GET',
//             status: 200,
//             response: [
//                 { ...article, id: '1' },
//                 { ...article, id: '2' },
//                 { ...article, id: '3' },
//             ],
//
//         },
//     ],
// };
