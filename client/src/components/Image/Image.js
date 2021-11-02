import styled from 'styled-components';
import { space, color, border, typography, layout, flexbox, position } from 'styled-system';
import { motion } from 'framer-motion';

export const Image = styled(motion.img)`
	${space}
	${color}
	${typography}
	${layout}
	${flexbox}
	${position}
	${border}
    height: ${(props) => (props.height ? props.height : 'auto')};
	cursor: ${(props) => props.pointer && 'pointer'};
	opacity: ${(props) => props.opacity};
`;
