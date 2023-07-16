import { createBoard } from '@wixc3/react-board';
import { Contact } from '../../../components/contact/contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 5000,
        canvasWidth: 1920,
        canvasHeight: 1080,
    },
});
