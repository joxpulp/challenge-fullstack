import styled from 'styled-components';
import { space, layout, flexbox, position } from 'styled-system';
import { motion } from 'framer-motion';

export const GroupList = styled(motion.ul)`
	${space}
	${layout}
	${flexbox}
	${position}
	display:${(props) => (props.display ? props.display : 'flex')};
`;
