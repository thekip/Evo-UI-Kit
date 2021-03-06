import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/Banner', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
            ],
        }),
)
    .add('default', () => ({
        template: `
        <evo-banner [banner]="banner">Нажми меня</evo-banner>
        `,
        props: {
            banner: {
                id: '123',
                button: 'Попробовать',
                image: '/banner.png',
                title: 'Заголовок',
                url: '/',
                background: '#e25248',
            },
        },
    }));
