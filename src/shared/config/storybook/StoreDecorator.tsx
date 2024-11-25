import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// @todo
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/AddCommentFormSlice';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
