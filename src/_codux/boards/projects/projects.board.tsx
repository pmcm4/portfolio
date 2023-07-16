import { createBoard } from '@wixc3/react-board';
import { Projects } from '../../../components/projects/projects';

export default createBoard({
    name: 'Projects',
    Board: () => <Projects />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1469,
        canvasWidth: 1920,
        canvasHeight: 1080,
    },
});
