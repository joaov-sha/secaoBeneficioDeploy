import Content from '../Content/Content';
import Title from '../Title/Title';
import css from './Container.module.css'
const Container = () => {
	return (
		<div className='container'>
			<Title/>
			<Content/>
		</div>
	);
}
export default Container;