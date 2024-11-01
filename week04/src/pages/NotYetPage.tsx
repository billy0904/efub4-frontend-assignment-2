import HomeIndicator from '../components/common/HomeIndicatior';
import TopBar from '../components/common/TopBar';
import NavBar from '../components/common/NavBar';
import Icon from "../assets/Common/shield_warning.svg";

const NotYetPage = () => {
    return (
        <div className='w-width h-height bg-White relative'>
            <TopBar />
            <div className="flex flex-col justify-center items-center h-[600px]">
                <img src={Icon} className="fill-Purple/1 mb-[20px]" />
                <h1 className="text-Gray/2 text-[20px] font-['Pretendard'] font-semibold mb-[10px]">
                    서비스 준비중입니다.</h1>
                <p className="text-Gray/4 text-[12px] font-['Pretendard'] font-medium">
                    보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.</p>
                <p className="text-Gray/4 text-[12px] font-['Pretendard'] font-medium">
                    빠른 시일 내에 준비하여 찾아뵙겠습니다.</p>
            </div>
            <div className='absolute bottom-0 w-width'>
                <NavBar />
                <HomeIndicator />
            </div>
        </div>
    );
}

export default NotYetPage;
