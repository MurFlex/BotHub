import cn from 'classnames'
import styles from './Loader.module.scss'
import { LoaderProps } from './Loader.props'

const Loader = ({ appearance = 'default' }: LoaderProps) => (
	<div className={styles.wrapper}>
		<div className={styles.loader}>
			{Array.from({ length: 8 }).map((_, index) => (
				<div key={index} className={cn(styles.line, styles[appearance])} />
			))}
		</div>
	</div>
)

export default Loader
