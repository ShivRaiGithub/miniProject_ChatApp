import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-screen w-screen rounded-lg overflow-hidden p-4 m-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		{/* <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> */}
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
