import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/Button', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoUiKitModule ],
        }),
)
    .add('default', () => ({
        template: '<evo-button>Нажми меня</evo-button>',
    }))
    .add('with size', () => ({
        template: `
        <div *ngFor="let size of sizes;">
        <p><evo-button [size]="size">Нажми меня</evo-button></p>
        </div>
        `,
        props: {
            sizes: [
                'small',
                'large',
            ],
        },
    }))
    .add('with color', () => ({
        template: `
        <div *ngFor="let color of colors;" [ngStyle]="{'background-color': color === 'white' ? '#403C3D' : none}">
        <p><evo-button [color]="color">Нажми меня</evo-button></p>
        </div>
        `,
        props: {
            colors: [
                'lined',
                'darkblue',
                'darkblue-lined',
                'green',
                'green-lined',
                'purple',
                'white',
                'red',
            ],
        },
    }))
    .add('with state', () => ({
        template: `
        <p><evo-button [disabled]="true">Нажми меня</evo-button></p>
        <p><evo-button [loading]="true">Нажми меня</evo-button></p>
        `,
    }));
